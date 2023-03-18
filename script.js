const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            if (!(entry.target.classList.contains('hiddenTitle'))) entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenTitle = document.querySelector('.hiddenTitle');
observer.observe(hiddenTitle);

const hiddenLeft = document.querySelectorAll('.left');
hiddenLeft.forEach((el) => observer.observe(el));

const hiddenRight = document.querySelectorAll('.right');
hiddenRight.forEach((el) => observer.observe(el));

const hiddenSchedule = document.querySelectorAll('.schedule');
hiddenSchedule.forEach((el) => observer.observe(el));