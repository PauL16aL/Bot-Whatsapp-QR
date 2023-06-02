<!DOCTYPE html>
<html>
<head>
    <title>QR Code</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
</head>
<body>
    <div class="color"></div>
    <div class='container'>
        <div class='text'>
            <h1>Whatsapp BOT</h1>
                <label>1. Abre Whatsapp en tu dispositivo movil.</label> <br>
                <label>2. Toca configuración y selecciona dispositivos vinculados.</label><br>
                <label>3. Toca vincular un dispositvo.</label><br>
                <label>4. Apunta tu dispositivo movil hacia esta pantalla para escanear el codigo QR.</label>
        </div>
        <div class='qr'>
            <div class="form-group">
                <div><img id="imagen" src="qr.png" alt="QR Code"></div>
                <script>
                    $(document).ready(function() {
                        setInterval(
                            function(){
                                $("#imagen").load("qr.php");
                            },10000
                        );     
                    });
                </script>
            </div>
        </div>  
    </div>
</body>
</html>