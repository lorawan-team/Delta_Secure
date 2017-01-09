<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Delta LoRaWAN</title>
	<link rel="shortcut icon" href="favicon.ico">

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
	<link href="/css/custom.css" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    <base href="/">
</head>
<body>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="{{ secure_url('/') }}">
                    <img id="navbar-icon" alt="Delta LoRaWAN" src="favicon.ico"> &nbspDelta LoRaWAN
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
					@if (Auth::guest())

					@else
						@include('layouts.menu')
					@endif
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->
                    @if (Auth::guest())
                        <li><a href="{{ secure_url('/login') }}">Login</a></li>
                        <li><a href="{{ secure_url('/register') }}">Register</a></li>
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
                                <li>
									<a href="">
                                        <i class="fa fa-user"></i> &nbspUser Settings
                                    </a>
                                    <a href="{{ secure_url('/logout') }}"
                                        onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                        <i class="fa fa-sign-out"></i> &nbspLogout
                                    </a>

                                    <form id="logout-form" action="{{ secure_url('/logout') }}" method="POST" style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            </ul>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>

    @yield('content')
	
	<footer class="footer">
		<div class="container">
			<p class="text-muted"><a href="https://github.com/lorawan-team/Delta_LoRaWAN/wiki">Documentation</a> | <a href="https://github.com/lorawan-team">Source Code</a></p>
		</div>
	</footer>

    <!-- Scripts -->
    <script src="/js/app.js"></script>
    <script src="/js/angular-app.js"></script>
</body>
</html>