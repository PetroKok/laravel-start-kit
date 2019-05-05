@extends('app.layouts.app')

@push("styles")
    <link rel="stylesheet" href="{{asset('css/profile/style4.css')}}">
    <link rel="stylesheet" href="{{asset('css/react-notify.css')}}">

<!-- Our Custom CSS -->
{{--<link rel="stylesheet" href="style4.css">--}}

<!-- Font Awesome JS -->
<script type="text/javascript" src="{{asset('js/solid.js')}}"></script>
<script type="text/javascript" src="{{asset('js/fontawesome.js')}}"></script>

@endpush

@push('scripts')
    <script type="text/javascript" src="{{asset('js/pages/profile.js')}}"></script>

    <script type="text/javascript">
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    </script>
@endpush