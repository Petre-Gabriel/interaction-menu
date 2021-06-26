![ezgif com-gif-maker](https://user-images.githubusercontent.com/39244510/123514903-dd8ac200-d69d-11eb-9b17-92be4b86e61f.gif)


### What is it
Simple to use and maintain menu for Rage.MP / ALT:V etc made in React with Redux.

By default, to make the menu appear you need to press `g`.

### Configuration
To change the texts, icons and interaction button you need to edit the `app.config.js` located in the `src` folder.

The styling was made with Tailwind CSS. To change colors, spacing etc. you need to change the theme object from `tailwind.config.js` file.

### Important
To add functionality to buttons, you need to add a `onClick` parameter to all button components. You can also do this from the `app.config.js` file by adding a function that to every button object you want.


            ActionID: 1,
            position: 'top',
            title: 'Cancel',
            description: 'No action will take place and the dialog will close.',
            icon: CancelIcon,
			onClick: () => alert('workiing!'),

