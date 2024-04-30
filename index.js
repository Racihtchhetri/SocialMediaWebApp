// Sidebar notification
const menuItem = document.querySelectorAll('.menu-item');

// Message
const messageNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');

// Search notification
const messageList = document.querySelectorAll('.message');
const messageSearchElement = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
const root = document.documentElement;
const colorPallete = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
const button = document.getElementsByClassName('btn');

// Remove active class from all menu items
function changeActiveItem() {
    menuItem.forEach(item => {
        item.classList.remove('active');
    });
}

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        const notificationPopup = document.querySelector('.notification-popup');
        if (notificationPopup) {
            notificationPopup.style.display = item.id === 'notification' ? 'block' : 'none';
        }
    });
});

// Sidebar Message
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

// Search message
const searchMessage = () => {
    const val = messageSearchElement.value.toLowerCase();
    console.log(val);
    messageList.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) !== -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display = 'none';
        }
    });
};
messageSearchElement.addEventListener('keyup', searchMessage);

// Theme Display
const openThemeModal = () => {
    themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = "none";
    }
};

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// Fonts
fontSize.forEach(size => {
    size.addEventListener('click', () => {
        let fontSizeValue;
        let buttonPadding;

        if (size.classList.contains('font-size-1')) {
            fontSizeValue = '10px';
            buttonPadding = '5px 15px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSizeValue = '13px';
            buttonPadding = '6px 16px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSizeValue = '16px';
            buttonPadding = '7px 17px';
            root.style.setProperty('--sticky-top-left', '2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSizeValue = '19px';
            buttonPadding = '8px 18px';
            root.style.setProperty('--sticky-top-left', '5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } 

        // Remove active class from all font size options
        fontSize.forEach(size => {
            size.classList.remove('active');
        });

        // Add active class to the clicked font size option
        size.classList.add('active');

        document.querySelector('html').style.fontSize = fontSizeValue;

        // Update button padding
        button.forEach(btn => {
            btn.style.padding = buttonPadding;
        });
    });
});
//color theme

//color theme
colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        root.style.setProperty('--primary-color-hue', primaryHue);

        // Remove active class from all color options
        colorPallete.forEach(c => {
            c.classList.remove('active');
        });

        // Add active class to the clicked color option
        color.classList.add('active');
    });
});

//bg color

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload(); // This line reloads the page, not sure if it's intended here
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '15%';
    whiteColorLightness = '20%';

    Bg1.classList.remove('active');
    Bg2.classList.add('active');
    Bg3.classList.remove('active');

    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '0%';
    whiteColorLightness = '10%';

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    Bg3.classList.add('active');

    changeBG();
});