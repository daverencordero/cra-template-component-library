const {Command, Option} = require('commander');
const {execSync}  = require('child_process');
const {terminal} = require('terminal-kit');
const fs = require('fs');

/**
 * Handles the configuration for the init script
 * @class
 * */
class PackageHandler {
    constructor() {
        this.json_path = 'package.json';
        this.config = this.getConfig() || {};
    }

    /**
     *  @return {object} The current config
     *  */
    getConfig = (key) => {
        const config = JSON.parse(fs.readFileSync(this.json_path).toString());
        if(typeof key === 'string' && key) return config[key];
        else return config;
    }

    /**
     * Sets the current config
     * @param value_callback {function} - A function that accepts the old config as a parameter and returns the new one
     * */
    setConfig = (value_callback) => {
        if(typeof value_callback !== 'function' || !value_callback) return;
        this.config = this.getConfig();
        fs.writeFileSync(
            this.json_path,
            JSON.stringify(value_callback(this.config), null, 2)
        );
    }
}

/**
 * Creates and handles a commander instance.
 * See {@link https://www.npmjs.com/package/commander}
 * */
class ProgramHandler {
    constructor() {
        this.program = new Command();

        this.program
            .version('0.0.1')
            .description('Bundled installer script for the Component Library CRA template')

        this.program
            .addOption(new Option(
                '-t, --typescript',
                'Adds typescript to the package.')
                .default(false))
            .addOption(new Option(
                '-s, --styles <preprocessor>',
                'Specifies CSS pre-processors to the package. (SCSS)')
                .choices(['SCSS']))
    }

    parse = () => this.program.parse(process.argv);
    getOptions = () => this.program.opts();
    getProgram = () => this.program;
}

/** Handles the init options */
class OptionsHandler {
    /**
     * Creates an OptionsHandler.
     * @param options {object} - The x value.
     * @param packageHandler {object} - An instance of the Config Handler
     */
    constructor(options, packageHandler) {
        this.options = options;
        this.packageHandler = packageHandler;
    }

    parse() {
        const {typescript, styles} = this.options;
        if(typescript) this.addsTypescript();
        if(styles) this.addsPreprocessor(styles);
    }

    addsTypescript = () => {
        const dependencies = [
            'typescript',
            '@rollup/plugin-typescript',
            '@typescript-eslint/eslint-plugin',
            '@typescript-eslint/parser',
            'eslint-plugin-tsdoc'
        ]
        const current_config = this.packageHandler.getConfig()
        const has_typescript = dependencies.every(dep => dep in current_config?.devDependencies);

        if (has_typescript) return;

        const dependency_string = dependencies.join(' ')

        execSync(`npm i -D ${dependency_string}`, {stdio: 'inherit'})

        this.packageHandler.setConfig((prevConfig)=>({
            ...prevConfig,
            eslintConfig: {
                ...prevConfig.eslintConfig,
                plugins: [
                    ...(prevConfig.eslintConfig.plugins||[]),
                    ...(!prevConfig.eslintConfig.plugins.includes("eslint-plugin-tsdoc")
                        ? ["eslint-plugin-tsdoc"]
                        : [])
                ]
            }
        }))
    }

    addsPreprocessor = (pre_processor) => {
        const dependencies = [
            ...(pre_processor === 'SCSS' ? ['sass'] : [])
        ]
        const has_pre_processor = dependencies.every(dep => dep in this.packageHandler?.getConfig()?.devDependencies);
        if (has_pre_processor) return;

        const dependency_string = dependencies.join(' ');

        execSync(`npm i -D ${dependency_string}`, {stdio: 'inherit'})
    }
}

// SCRIPT PROPER
const packageHandler = new PackageHandler();
const programHandler = new ProgramHandler();

programHandler.parse();

const options = programHandler.getOptions();
const optionsHandler = new OptionsHandler(options, packageHandler);

optionsHandler.parse();