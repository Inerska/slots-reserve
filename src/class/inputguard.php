<?php


class InputGuard
{
    function __construct($targetinput)
    {
        if (isset($targetinput)) {
            parse_str($targetinput, $output);
            print $output['title'];
        }
    }
}