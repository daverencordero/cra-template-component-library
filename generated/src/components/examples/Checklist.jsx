import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Styles from './Checklist.module.css'

/**
 * A simple scalable checklist component
 * @component
 *
 * @example
 * // After importing
 * // On the render function as JSX
 * <Checklist/>
 * */
export const Checklist = (props) => {
    const {
        ownerName,
        maxCount,
        initialList,
        defaultLabel
    } = props;

    const [list, setList] = useState(initialList);
    const [currentEditIndex, setCurrentEditIndex] = useState(-1);

    const render_list = list.map(({
        label = defaultLabel,
        checked = false
    }, item_index) =>{
        const is_current_edit = currentEditIndex === item_index;

        const checkbox_class_name = [
            Styles["Checkbox"],
            ...(checked ? [Styles["Checked"]] : [])
        ].join(' ')

        const handleCloseEdit = (e) => {
            e.stopPropagation();
            setCurrentEditIndex(-1);
        }
        const handleEdit = () => setCurrentEditIndex(item_index);
        const handleCheck = () => setList([
            ...list.slice(0,item_index),
            Object.assign({}, list[item_index], {label, checked: !checked}),
            ...list.slice(item_index+1)
        ]);
        const handleChange = (e) => setList([
            ...list.slice(0,item_index),
            Object.assign({}, list[item_index], {label: e.target.value, checked}),
            ...list.slice(item_index+1)
        ]);

        return(
            <div className={Styles["List_Item"]} key={item_index}>
                <div className={checkbox_class_name} onClick={handleCheck}>
                    {checked ? '✓' : ''}
                </div>
                <div
                    onClick={handleEdit}
                    className={Styles["Label"]}
                    style={{
                        textDecoration: checked ? "line-through" : "",
                        opacity: checked ? 0.5 : 1
                    }}>
                    {!is_current_edit ? label :
                        <div className={Styles["EditInput"]}>
                            <input
                                autoFocus
                                type="text"
                                value={label}
                                onChange={handleChange}
                                className={Styles["InputField"]} />
                            <div
                                onClick={handleCloseEdit}
                                className={Styles["CloseInput"]} >🞩</div>
                        </div>}
                </div>
            </div>
        )
    })

    const handleAdd = () => {
        if(list.length >= maxCount) return;
        setList([...list, {label: defaultLabel, checked: false}])
    }

    return (
        <div className={Styles["Checklist"]}>
            <h2 className={Styles["Header"]}>
                📝 {ownerName ? `${ownerName}'s` : ''} Checklist
                <div onClick={handleAdd} n className={Styles["AddButton"]}>+ Add</div>
            </h2>
            <div className={Styles["List"]}>
                {render_list}
            </div>
        </div>
    );
}

Checklist.propTypes = {
    /** Maximum count of list items */
    maxCount: PropTypes.number,
    /** Owners name that's visible on the header */
    ownerName: PropTypes.string,
    /** The default value of a list item label when added */
    defaultLabel: PropTypes.string,
    /** Array of list item objects*/
    initialList: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired
    }))
}

Checklist.defaultProps = {
    maxCount: 3,
    defaultLabel: 'Edit Text',
    initialList: []
}