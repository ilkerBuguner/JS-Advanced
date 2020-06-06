function attachEventsListeners() {
    const ratios = {
        days : 1,
        hours : 24,
        minutes : 1440,
        seconds : 86400
    };

    function convert(value, from) {
        const inDays = value / ratios[from];
        return {
            days : inDays * ratios.days,
            hours : inDays * ratios.hours,
            minutes : inDays * ratios.minutes,
            seconds : inDays * ratios.seconds
        };
    };

    document.getElementsByTagName('main')[0].addEventListener('click', findValue);

    function display(objectToShow) {
        document.getElementById('days').value = objectToShow.days;
        document.getElementById('hours').value = objectToShow.hours;
        document.getElementById('minutes').value = objectToShow.minutes;
        document.getElementById('seconds').value = objectToShow.seconds;
    }

    function findValue(e) {
        if(e.target.type === 'button'){
            const value = Number(e.target.parentNode.children[1].value);
            const from = e.target.parentNode.children[1].id;
            let objectToShow = convert(value, from);
            display(objectToShow);
        }
    };

}