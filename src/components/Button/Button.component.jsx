import { useDispatch } from 'react-redux';
import Configuration from '../../app.config';
import { updateContentData } from '../../redux/content/content.actions';

const {defaults} = Configuration;

const positionsClasses = {
    'top': 'left-2/4 top-0 -translate-x-2/4',
    'right': 'right-0 top-2/4 -translate-y-2/4',
    'bottom': 'left-2/4 bottom-0 -translate-x-2/4',
    'left': 'left-0 top-2/4 -translate-y-2/4',
    'top-right': 'left-3/4 top-1/4 -translate-x-2/4 -translate-y-2/4',
    'bottom-right': 'left-3/4 bottom-1/4 -translate-x-2/4 translate-y-2/4',
    'bottom-left': 'left-1/4 bottom-1/4 -translate-x-2/4 translate-y-2/4',
    'top-left': 'left-1/4 top-1/4 -translate-x-2/4 -translate-y-2/4',
};

export default function Button({icon, position, className, onClick, title, description, ActionID, ...otherProps}) {
    const classes = ['p-4 hover:bg-gray-50 select-none shadow-md rounded-full disabled:opacity-50 disabled:cursor-not-allowed'];

    // Handle class addition by creating an array and joining them with a space
    if(className)
        classes.push(className);

    if(positionsClasses[position])
        classes.push('absolute transform', positionsClasses[position]);

    const buttonClass = classes.join(' ');

    const dispatch = useDispatch();

    const handleHover = (enters) => () => {
        const titleShown = enters ? title : defaults.title,
            descriptionShown = enters ? description : defaults.description;

        dispatch(updateContentData({title: titleShown, description: descriptionShown}));        
    }

    function handleClick() {
        if(typeof onClick !== 'function')
            return;
        
        onClick(ActionID);
    }

    return <button onClick={handleClick} onMouseEnter={handleHover(true)} onMouseLeave={handleHover(false)} className={buttonClass} {...otherProps}>
        <img className="w-8 max-w-max" src={icon} alt="Button Icon"/>
    </button>
}