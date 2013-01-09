# jQuery ScrollToEl

A jQuery plugin to scroll to the selected jQuery element

## Usage:

    $('selector').scrollToEl();

The plugin supports passing several options:


| Option            | Description                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| duration          | scrolling duration in milliseconds, or using jQuery's 'fast' or 'slow' predefined duration values                                     |
| easing            | easing function to use for the transition, defaulting to jQuery [animate()](http://api.jquery.com/animate/)'s default if unspecified  |
| offset            | stop scrolling above the exact element position for the given number of pixels                                                        |


**Example:**

    $('selector').scrollToEl({
        duration : 'fast'
      , offset   : 20
    });

## History

##### 0.1.1 :: *(2013-01-09)*

  * added passing a callback to be executed on animation finished
  * including 'easing' option if passed in options object

##### 0.1.0 :: *(2012-11-27)*

  * Initial release

## License

This plugin is licensed under the [MIT License](https://github.com/zappan/jquery.scrollToEl/blob/master/LICENSE.txt)
