<?php


/**
 * Class InputGuard
 */
class InputGuard
{
    /**
     * InputGuard constructor.
     * @param string $targetinput
     */
    function __construct($targetinput)
    {
        if (isset($targetinput)) {
            parse_str($targetinput, $output);
            print $output['title'];
        }
    }
}