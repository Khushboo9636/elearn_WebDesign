// DOM Element's
const milestone_counters = document.querySelectorAll('.milestone_counter');

/*** Using forEach() ***/

/*
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 5000;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCount();
})

*/

/*** Same functionality, now using for...of ***/

for(let n of milestone_counters) {
    const updateCount = () => {
        const target = + n.getAttribute('data-target');
        const count = + n.innerText;
        const speed = 60000;
        
        const inc = target / speed; 

        if(count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 5);
        } else {
            n.innerText = target;
        }
    }

    updateCount();
}

