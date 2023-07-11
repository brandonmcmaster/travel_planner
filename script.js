document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('travelPlanForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let destination = document.getElementById('destination').value;
        let duration = document.getElementById('duration').value;
        let interests = document.getElementById('interests').value;

        let travelPlan = {
            destination: destination,
            duration: duration,
            interests: interests
        };

        // Here you would send the travelPlan to your API
        console.log(travelPlan);



        document.getElementById('destination').value = '';
        document.getElementById('duration').value = '';
        document.getElementById('interests').value = '';
    });
});
