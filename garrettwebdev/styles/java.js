
const hamMenu = document.querySelector('.ham-menu');
                const offScreenMenu = document.querySelector('.off-screen-menu');
                const closeMenu = document.querySelector('.close-menu');
                const overlay = document.getElementById('overlay');
                hamMenu.addEventListener('click', () => {
                    offScreenMenu.classList.add('active'); // Show menu
                    overlay.classList.add('show'); // Show overlay with transition
                });
                
                // Close menu and hide overlay
                closeMenu.addEventListener('click', () => {
                    offScreenMenu.classList.remove('active'); // Hide menu
                    overlay.classList.remove('show'); // Hide overlay with transition
                });