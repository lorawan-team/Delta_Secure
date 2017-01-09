@extends('layouts.app')

@section('content')

<link rel="stylesheet" type="text/css" href="/font-awesome-4.6.3/css/font-awesome.min.css">

<div class="container" ng-controller="MainController">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <passport-clients></passport-clients>
            <passport-authorized-clients></passport-authorized-clients>
            <passport-personal-access-tokens></passport-personal-access-tokens>

            <div class="panel-group" id="accordion1">
                <div class="panel panel-default">
                    <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1,#accordion2,#accordion3" data-target="#collapseOne1">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h4 class="panel-title">
                                Devices
                            </h4>
                            <button type="button" class="btn btn-link pull-right"><i class="fa fa-chevron-down"></i></button>
                        </div>
                    </div>
                    <div id="collapseOne1" class="panel-collapse collapse" ui-sref="devices">
                        <ul class="list-group">
                            <ui-view = "devices">
                            <li class="list-group-item">Device 1</li>
                            <li class="list-group-item">Device 2</li>
                            <li class="list-group-item">Device 2</li>
                        </ul>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1,#accordion2,#accordion3" data-target="#collapseTwo1">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h4 class="panel-title">
                                Sensors
                            </h4>
                            <button type="button" class="btn btn-link pull-right"><i class="fa fa-chevron-down"></i></button>
                        </div>
                    </div>
                    <div id="collapseTwo1" class="panel-collapse collapse">
                        <ul class="list-group">
                            <li class="list-group-item"><a>Device 1</a>&nbsp<a>Sensor 1</a></li>
                            <li class="list-group-item"><a>Device 1</a>&nbsp<a>Sensor 2</a></li>
                            <li class="list-group-item"><a>Device 1</a>&nbsp<a>Sensor 3</a></li>
                            <li class="list-group-item"><a>Device 2</a>&nbsp<a>Sensor 1</a></li>
                            <li class="list-group-item"><a>Device 2</a>&nbsp<a>Sensor 2</a></li>
                            <li class="list-group-item"><a>Device 2</a>&nbsp<a>Sensor 3</a></li>
                            <li class="list-group-item"><a>Device 3</a>&nbsp<a>Sensor 1</a></li>
                            <li class="list-group-item"><a>Device 3</a>&nbsp<a>Sensor 2</a></li>
                            <li class="list-group-item"><a>Device 3</a>&nbsp<a>Sensor 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection
