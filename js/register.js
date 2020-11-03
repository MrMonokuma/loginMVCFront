$("#btnRegistrar").click(function(e){
    e.preventDefault();
    var username=$("#username").val();
    var pass=$("#pass").val();
        var obj={
            username: username,
            contra: pass
        };
        registrarUsuario(obj)
});