<!DOCTYPE html>
<html>

<head>
	<title> {{$title }}</title>
</head>

<body>
	<h1 class="label id">{{$id }}</h1>
	<h1 class="label name">{{$name }}</h1>
	<h1 class="label birthdate">{{$birthdate }}</h1>
	<h1 class="label birthplace">{{$birthplace }}</h1>
	<h1 class="label certificate">{{$certificate }}</h1>
	<h1 class="label certifdate">{{$certifdate }}</h1>
	<h1 class="label speciality">{{$speciality }}</h1>

	<img class="label" src="data:image/png;base64,{{ $qrcode }}">
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

	body {
		padding: 0 !important;
		margin: 0 !important;
	}

	body{
		background: url({{public_path('images/cert1.jpeg') }}) no-repeat;
		background-size: cover;
	}


	h1.label {
		position: absolute;
		font-size: 1.8rem;
		font-weight: bold;
		color: black;
	}

	h1.label.id {
		left: 31rem;
		top: 16.3rem;
	}


	h1.label.name {
		left: 10rem;
		top: 24.4rem;

	}


	h1.label.birthdate {
		left: 41.5rem;
		top: 24.4rem;

	}


	h1.label.birthplace {
		left: 54rem;
		top: 24.4rem;

	}


	h1.label.certificate {
		left: 8.5rem;
		top: 28rem;

	}


	h1.label.certifdate {
		left: 44rem;
		top: 28rem;
	}



	h1.label.speciality {
		left: 10rem;
		top: 34.7rem;

	}

	img.label {
		position: absolute;
		left: 33rem;
		top: 38.6rem;
		width: 4rem;
		height: 4rem;
	}
</style>