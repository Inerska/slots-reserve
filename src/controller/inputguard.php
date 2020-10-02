<?php


/**
 * Class InputGuard
 */
class InputGuard
{
    /**
     * InputGuard constructor.
     *
     * Returns a safe output from input.
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