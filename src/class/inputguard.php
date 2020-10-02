<?php


class InputGuard
{
    function __construct($targetinput)
    {
        if (isset($targetinput)) {
            print empty($targetinput) ? "" : $targetinput;
        }
    }
}