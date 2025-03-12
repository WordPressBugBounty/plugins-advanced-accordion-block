(function ($) {
    'use strict';
    // show body on click head
    $(document).on('click', '.aab__accordion_head', function () {
        const $this = $(this);
        const $parent = $this.parent();
        const $icon = $this
            .children('.aab__accordion_icon')
            .children('.aab__icon');
        const $body = $parent.children('.aab__accordion_body');
        // icons
        if ($icon.hasClass('dashicons-plus-alt2')) {
            $icon.removeClass('dashicons-plus-alt2');
            $icon.addClass('dashicons-minus');
        } else if ($icon.hasClass('dashicons-minus')) {
            $icon.removeClass('dashicons-minus');
            $icon.addClass('dashicons-plus-alt2');
        } else if ($icon.hasClass('dashicons-arrow-down-alt2')) {
            $icon.removeClass('dashicons-arrow-down-alt2');
            $icon.addClass('dashicons-arrow-up-alt2');
        } else if ($icon.hasClass('dashicons-arrow-up-alt2')) {
            $icon.removeClass('dashicons-arrow-up-alt2');
            $icon.addClass('dashicons-arrow-down-alt2');
        } else if ($icon.hasClass('dashicons-arrow-down')) {
            $icon.removeClass('dashicons-arrow-down');
            $icon.addClass('dashicons-arrow-up');
        } else if ($icon.hasClass('dashicons-arrow-up')) {
            $icon.removeClass('dashicons-arrow-up');
            $icon.addClass('dashicons-arrow-down');
        } else if ($icon.hasClass('dashicons-plus-alt')) {
            $icon.removeClass('dashicons-plus-alt');
            $icon.addClass('dashicons-dismiss');
        } else if ($icon.hasClass('dashicons-dismiss')) {
            $icon.removeClass('dashicons-dismiss');
            $icon.addClass('dashicons-plus-alt');
        } else if ($icon.hasClass('dashicons-insert')) {
            $icon.removeClass('dashicons-insert');
            $icon.addClass('dashicons-remove');
        } else if ($icon.hasClass('dashicons-remove')) {
            $icon.removeClass('dashicons-remove');
            $icon.addClass('dashicons-insert');
        }
        // toggle body
        $body.slideToggle();
        // adding active class
        $($this).toggleClass('active');
    });
    // Keyboard Navigation for Accordion
    $('.aab__accordion_container.separate-accordion').each(function () {
        const accordionContainer = $(this);
        const accordionHeads = accordionContainer.find('.aab__accordion_head');
        accordionHeads.each(function (index) {
            const accordionHead = $(this);
            // Add tabindex and class for keyboard accessibility
            accordionHead.attr('tabindex', '0');
            accordionHead.addClass('aab__accordion_head--keyboard');
            // Handle keydown events for keyboard navigation and interaction
            accordionHead.on('keydown', function (e) {
                switch (e.key) {
                    case 'Enter':
                    case ' ':
                        e.preventDefault();
                        accordionHead.click(); // Trigger the click event
                        break;
                }
            });
            // Add class to the container when focus is on the accordion head
            accordionHead.on('focus', function () {
                accordionContainer.addClass('keyboard-active');
            });
            // Remove class from the container when focus is lost
            accordionHead.on('blur', function () {
                accordionContainer.removeClass('keyboard-active');
            });
        });
    });
})(jQuery);