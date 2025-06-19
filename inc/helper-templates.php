<?php

if (!function_exists('add_popup_local')) {
    function add_popup_local() {
        include MEBELKA_REQUIRE_DIRECTORY . '/template-parts/content-variables.php';
        ?>
        <div class="popup popup__local" data-popup="popup__local">
            <div class="popup-bg" data-close="close"></div>
            <div class="popup-wrapper">
                <div class="popup-wrap">
                    <div class="popup__top">
                        <span><?= __('Выберите ваш город' , 'mebelka') ?></span>
                        <button class="close popup-close" data-close="close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <g opacity="0.8">
                                    <circle cx="20" cy="20" r="19.5" stroke="#003944"/>
                                    <path d="M26.7919 13.2081C26.7261 13.1421 26.6479 13.0898 26.5618 13.0541C26.4757 13.0184 26.3834 13 26.2902 13C26.197 13 26.1048 13.0184 26.0187 13.0541C25.9326 13.0898 25.8544 13.1421 25.7886 13.2081L19.9963 19.001L14.2111 13.2152C14.0781 13.0822 13.8976 13.0074 13.7095 13.0074C13.5213 13.0074 13.3408 13.0822 13.2078 13.2152C13.0747 13.3483 13 13.5288 13 13.717C13 13.9051 13.0747 14.0856 13.2078 14.2187L18.993 20.0044L13.2078 25.7902C13.1085 25.8896 13.041 26.0162 13.0138 26.1541C12.9866 26.2919 13.001 26.4347 13.0551 26.5644C13.1093 26.694 13.2007 26.8046 13.3179 26.8822C13.435 26.9598 13.5725 27.0008 13.713 27C13.898 27 14.0759 26.9288 14.2182 26.7936L19.9963 21.0079L25.7815 26.7936C25.9238 26.9359 26.1017 27 26.2867 27C26.4717 27 26.6496 26.9288 26.7919 26.7936C26.8579 26.7278 26.9102 26.6496 26.9459 26.5635C26.9816 26.4774 27 26.3851 27 26.2919C27 26.1987 26.9816 26.1064 26.9459 26.0203C26.9102 25.9342 26.8579 25.856 26.7919 25.7902L20.9996 20.0044L26.7848 14.2187C27.0694 13.9411 27.0694 13.4857 26.7919 13.2081Z" fill="#003944"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <ul class="local__list">
                        <?php if($main_city) : ?>
                            <li class="active"><a href="<?= get_home_url(); ?>"><?= $main_city ?></a></li>
                        <?php endif; ?>    
                        <?php if( have_rows('cities' , 'option') ): ?>
                            <?php while( have_rows('cities' , 'option') ): the_row(); 
                                $city = get_sub_field('city' , 'option');
                                ?>
                                <?php
                                    if($city) : ?>
                                        <li><a target="_blank" rel="nofollow" href="<?= $city['url'] ?>"><?= $city['title'] ?></a></li>
                                <?php endif; ?>
                            <?php endwhile; ?>
                        <?php endif; ?>
                    </ul>
                    <p><?= __('<strong>Выберите свой вариант,</strong> чтобы получить актуальную информацию о наличии товара, его цены и способов доставки в вашу страну! Это позволит сэкономить больше времени для вас!' , 'mebelka') ?></p>
                </div>
            </div>
        </div>
        <?php
    }
    add_action('wp_footer', 'add_popup_local');
}

if(!function_exists('mebelka_wpml_language_switcher')) {
    function mebelka_wpml_language_switcher() {
        if (!function_exists('icl_get_languages')) return;
    
        $languages = icl_get_languages('skip_missing=0');
        if (empty($languages)) return;
    
        ob_start(); ?>
        <div class="lang">
            <div class="lang__current">
                <?php foreach ($languages as $lang): ?>
                    <?php if ($lang['active']): ?>
                        <img src="<?= esc_url($lang['country_flag_url']) ?>" alt="<?= esc_attr($lang['native_name']) ?>">
                        <span><?= esc_html($lang['native_name']) ?></span>
                        <?php break; ?>
                    <?php endif; ?>
                <?php endforeach; ?>
                <img src="<?= MEBELKA_THEME_DIRECTORY ?>assets/images/wpml-img.svg" alt="Выбор языка">
            </div>
            <ul class="lang__dropdown">
                <?php foreach ($languages as $lang): ?>
                    <?php if (!$lang['active']): ?>
                        <li class="lang__dropdown">
                            <a href="<?= esc_url($lang['url']) ?>">
                                <img src="<?= esc_url($lang['country_flag_url']) ?>" alt="<?= esc_attr($lang['native_name']) ?>">
                                <?= esc_html($lang['native_name']) ?>
                            </a>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php return ob_get_clean();
    }
    
}