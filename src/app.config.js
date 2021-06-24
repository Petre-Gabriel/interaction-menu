import InfoIcon from './assets/icons/info.svg';
import CancelIcon from './assets/icons/cancel.svg';
import LocationIcon from './assets/icons/location.svg';
import LockIcon from './assets/icons/lock.svg';
import UnlockIcon from './assets/icons/unlock.svg';
import GarageIcon from './assets/icons/garage.svg';

const configuration = Object.freeze({
    InteractionKey: 'g',
    defaults: {
        title: 'Interaction Menu',
        description: 'Please select an option'
    },

    Buttons: [
        {
            ActionID: 1,
            position: 'top',
            title: 'Cancel',
            description: 'No action will take place and the dialog will close.',
            icon: CancelIcon,
        },
        {
            ActionID: 2,
            position: 'top-right',
            title: 'Location',
            description: 'Locate your vehicle.',
            icon: LocationIcon       
        },
        {
            ActionID: 3,
            position: 'right',
            title: 'Lock car',
            description: 'Lock the nearest owned car.',
            icon: LockIcon       
        },
        {
            ActionID: 4,
            position: 'bottom-right',
            icon: InfoIcon,
            disabled: true    
        },
        {
            ActionID: 5,
            position: 'bottom',
            title: 'Car Info',
            description: 'See details about your car.',
            icon: InfoIcon       
        },
        {
            ActionID: 6,
            position: 'bottom-left',
            icon: InfoIcon,       
            disabled: true
        },
        {
            ActionID: 7,
            position: 'left',
            title: 'Unlock car',
            description: 'UnLock the nearest owned car.',
            icon: UnlockIcon       
        },
        {
            ActionID: 8,
            position: 'top-left',
            title: 'Spawn car',
            description: 'Spawn the car at your garage.',
            icon: GarageIcon   
        },
    ]
});

export default configuration;