<?php
$out = "<pre>".shell_exec('ipconfig')."</pre>";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var jsvar = `<?= $out ?>`;
        console.log(jsvar)
    </script>
</head>

<body>

</body>

</html>
