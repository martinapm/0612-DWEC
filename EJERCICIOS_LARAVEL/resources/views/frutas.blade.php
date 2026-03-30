<!DOCTYPE html>
<html>
<head>
    <title>Frutas</title>
</head>
<body>
    <h1>Lista de frutas</h1>
    <ul>
        @foreach($frutas as $fruta)
            <li>{{ $fruta }}</li>
        @endforeach
    </ul>
</body>
</html>