# cra-template-component-library

This is a component library template for [Create React App](https://github.com/facebook/create-react-app). It comes kitted with all the necessary tools you need to easily create your very own component library, and has a readily configured rollup bundler upon building.

To use this template, add `--template component-library` when creating a new app.

For example:

```bash
npx create-react-app my-app --template component-library`

# or

yarn create react-app my-app --template component-library`
```



#### :hammer: Optional Tools/Dependencies: 

- [Storybook](https://storybook.js.org/)
- [SASS](https://sass-lang.com/)

To add optional dependencies to your project, you have to use `clinit.js`. To run the script, do `npm run init -- <args> (options)`.

e.g.

```bash
# Add Typescript and SCSS to project
npm run init -- -t -s SCSS
```

