<!DOCTYPE html>
<html>

<head>
	<title> {{$title }}</title>
</head>

<body>
	<h1 class="label name">{{$name }}</h1>
	<h1 class="title">Role/Rôle:</h1>
	<h1 class="label id">{{$role }}</h1>
	<img class="label" src="data:image/png;base64,{{ $qrcode }}">
	<h1 class="label exp">{{$expiration }}</h1>
</body>

</html>

<style>
	@page {
		margin: 0px;
		padding: 0px;
	}

	html {
		margin: 0px !important;
		padding: 0px;

	}

	h1 {
		padding: 0 !important;
		margin: 0 !important;
	}

	body {
		padding: 0 !important;
		margin: 0 !important;
	}

	body {
		background: url({{public_path('images/badge.jpeg') }}) no-repeat;
		background-size: cover;
	}


	h1.label {
		text-align: center;
		font-size: 3.2rem;
		font-weight: bold;
		color: green;
	}

	h1.title {
		font-style: italic;
		font-size: 3rem;
		text-align: center;
		margin-top: 4rem;

	}


	h1.label.name {
		margin-top: 17rem !important;

	}

	h1.label.exp {
		margin-top: 7.4rem !important;

	}

	img.label {
		width: 5rem;
		height: 5rem;
		margin-left: 15rem;
		margin-top: 1.4rem !important;

	}
</style>