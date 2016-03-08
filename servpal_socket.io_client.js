var appointment = io.connect('http://localhost:8998/appointment');

var user_obj = {user_id: 1, full_name: "Yu Song", email: "bjslxxx@126.com"};
appointment.on('connect', function () {
    appointment.emit('client_setup', user_obj);
});

appointment.on(user_obj.user_id, function (data) {
    console.log("new message come: "+JSON.stringify(data));
});