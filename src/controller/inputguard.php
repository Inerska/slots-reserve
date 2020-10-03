<?php


/**
 * Class InputGuard
 */
class InputGuard
{
    /**
     * Return parsed Ajax payload
     * @param $request
     * @return mixed
     */
    public static function parseRequest($request)
    {
        if (isset($request)) {
            parse_str($request, $output);
            return $output;
        }
    }
}