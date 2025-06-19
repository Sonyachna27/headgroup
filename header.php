<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
    <title><?= YoastSEO()->meta->for_current_page()->context->title ? YoastSEO()->meta->for_current_page()->context->title : the_title() ?></title>
    <?php wp_head();?> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="<?php bloginfo( 'charset' ); ?>">

</head>
<body <?php body_class(); ?>>
<?php wp_body_open();
include HEADGROUP_REQUIRE_DIRECTORY . '/template-parts/content-variables.php';?>
		<!-- <header>
		<div class="header__bottom">
			<div class="container">
				<div class="header__bottom__container">
					<?php
						if($site_logo) { ?>
					<a href="<?= get_home_url(); ?>" class="logo">
						<img src="<?= $site_logo ?>" alt="<?= the_title() ?>">
					</a>
					<?php } ?>

					<div class="header__nav">
						<nav>
							<?php wp_nav_menu( array( 'theme_location' => 'header-menu', 'container' => 'ul' , 'items_wrap' => '<ul id="%1$s" class="menu">%3$s</ul>' ) ); ?>
						</nav>
					
					</div>
					<div class="switcher">
						<?php
							if (defined('ICL_SITEPRESS_VERSION')) {
								do_action('wpml_language_switcher');
							}
						?>
					</div>
					<div class="burgerBtn">
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</header> -->
	<header class="header">
<div class="header__promo">
	<div class="container">
		<div class="header__promo__container">
			<span>Внезапная весна </span>
			<div class="countdown-timer" data-timer="15.04.2025 01:30">
				<div class="countdown-item">
					<div class="countdown-digits">
						<span class="countdown-digit" data-days-1>0</span>
						<span class="countdown-digit" data-days-2>1</span>
					</div>
					<span class="countdown-label">Дней</span>
				</div>
				<span class="countdown-separator">:</span>
				<div class="countdown-item">
					<div class="countdown-digits">
						<span class="countdown-digit" data-hours-1>0</span>
						<span class="countdown-digit" data-hours-2>0</span>
					</div>
					<span class="countdown-label">Часов</span>
				</div>
				<span class="countdown-separator">:</span>
				<div class="countdown-item">
					<div class="countdown-digits">
						<span class="countdown-digit" data-minutes-1>0</span>
						<span class="countdown-digit" data-minutes-2>0</span>
					</div>
					<span class="countdown-label">Минут</span>
				</div>
				<span class="countdown-separator">:</span>
				<div class="countdown-item">
					<div class="countdown-digits">
						<span class="countdown-digit" data-seconds-1>0</span>
						<span class="countdown-digit" data-seconds-2>0</span>
					</div>
					<span class="countdown-label">Секунд</span>
				</div>
			</div>
			<span>Скидки до 70%</span>
		</div>
	</div>
</div>
<!-- начало header-top -->
<div class="header__top">
	<!-- начало меню для декстопа -->
	<div class="header__top__wrap">
	<div class="container">
		<div class="header__top__container">			
			<div class="header__top__btns">
				<button class="header__top__btns__local" data-open="popup__local">
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
						<path d="M9.00044 1.50024C5.69204 1.50024 3.00104 4.19124 3.00104 7.49605C2.97854 12.3299 8.77274 16.3385 9.00044 16.5005C9.00044 16.5005 15.0223 12.3299 15.0007 7.50054C14.9991 5.90968 14.3664 4.38445 13.2415 3.25953C12.1165 2.13462 10.5913 1.50191 9.00044 1.50024ZM9.00044 10.5002C8.60646 10.5002 8.21633 10.4226 7.85233 10.2719C7.48834 10.1211 7.15761 9.90011 6.87902 9.62152C6.60043 9.34293 6.37944 9.0122 6.22866 8.6482C6.07789 8.28421 6.00029 7.89408 6.00029 7.50009C6.00029 7.10611 6.07789 6.71598 6.22866 6.35199C6.37944 5.98799 6.60043 5.65726 6.87902 5.37867C7.15761 5.10008 7.48834 4.87909 7.85233 4.72832C8.21633 4.57755 8.60646 4.49994 9.00044 4.49994C9.39443 4.49994 9.78455 4.57755 10.1485 4.72832C10.5125 4.87909 10.8433 5.10008 11.1219 5.37867C11.4005 5.65726 11.6214 5.98799 11.7722 6.35199C11.923 6.71598 12.0006 7.10611 12.0006 7.50009C12.0006 7.89408 11.923 8.28421 11.7722 8.6482C11.6214 9.0122 11.4005 9.34293 11.1219 9.62152C10.8433 9.90011 10.5125 10.1211 10.1485 10.2719C9.78455 10.4226 9.39443 10.5002 9.00044 10.5002Z" fill="#003944"/>
						</svg>
							Алматы
				</button>
				<div class="header__top__btns__contact">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M18.3328 14.1V16.6C18.3338 16.832 18.2863 17.0618 18.1934 17.2744C18.1005 17.4871 17.9642 17.678 17.7932 17.835C17.6222 17.9919 17.4203 18.1114 17.2005 18.1857C16.9806 18.2601 16.7477 18.2877 16.5165 18.2668C13.9522 17.9883 11.4889 17.1121 9.32465 15.7087C7.31118 14.4293 5.6041 12.7222 4.32465 10.7087C2.91638 8.53469 2.04001 6.05951 1.76653 3.4837C1.74571 3.25327 1.77309 3.02102 1.84693 2.80174C1.92077 2.58247 2.03945 2.38096 2.19542 2.21006C2.35139 2.03916 2.54123 1.9026 2.75286 1.80907C2.96449 1.71555 3.19328 1.66711 3.42465 1.66683H5.92465C6.32907 1.66284 6.72114 1.80601 7.02781 2.06968C7.33448 2.33334 7.53483 2.69951 7.59153 3.09995C7.69715 3.89995 7.89278 4.68558 8.17465 5.44183C8.28678 5.74006 8.31105 6.06419 8.24459 6.3758C8.17812 6.68741 8.02371 6.97343 7.79965 7.19995L6.74153 8.2587C7.92787 10.345 9.65527 12.0724 11.7415 13.2587L12.7997 12.2C13.0262 11.9759 13.3122 11.8215 13.6238 11.755C13.9354 11.6886 14.2595 11.7128 14.5578 11.825C15.314 12.1075 16.0997 12.3031 16.8997 12.4087C17.3044 12.4659 17.6741 12.6699 17.9383 12.9818C18.2025 13.2937 18.3429 13.6919 18.3328 14.1006V14.1Z" fill="#003944"/>
						</svg>
						<div class="header__top__btns__contact__wrap">
							<a href="tel:+7 (707) 357-09-17">+7 (707) 357-09-17</a>
							<span>заказать звонок</span>
						</div>
				</div>
			
			</div>
			<div class="header__top__nav">
				<?= HEADGROUP_wpml_language_switcher(); ?>
				<nav>
					<ul>
						<li><a href="#">Доставка и оплата</a>
						</li>
						<li><a href="#">Контакты</a></li>
						<li>
							<a href="#">Покупателям</a>
							<ul class="sub-menu">
								<li><a href="#">Доставка и оплата</a>
									<ul class="sub-menu">
										<li><a href="#">Доставка и оплата</a></li>
										<li><a href="#">Доставка и оплата</a></li>
										<li><a href="#">Доставка и оплата</a></li>
										<li><a href="#">Доставка и оплата</a></li>
										<li><a href="#">Доставка и оплата</a></li>
									</ul>
								</li>
								<li><a href="#">Доставка и оплата</a></li>
								<li><a href="#">Доставка и оплата</a></li>
								<li><a href="#">Доставка и оплата</a></li>
								<li><a href="#">Доставка и оплата</a></li>
								<li><a href="#">Доставка и оплата</a></li>
							</ul>
						</li>
						<li>
							<a href="#">Новости и Акции</a>
							<ul class="sub-menu">
								<li><a href="#">Новости и Акции</a></li>
								<li><a href="#">Новости и Акции</a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
<!-- конец меню для декстопа -->
 <!-- начало мобильного меню -->
	<div class="header__top__mobile">
		<div class="header__top__mobile__wrap">
		<div class="header__top__form header__form">
			<form action="">
				<div class="input__search">
				<input type="search" name="header_search" placeholder="Поиск...">
			</div>
			</form>
			<div class="header__search-results">
				<div class="header__search-results__title">Результат поиска</div>
				<div class="search__error">
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4879 1.50146C8.49429 1.50146 2.00488 7.99087 2.00488 15.9845C2.00488 23.9782 8.49429 30.4676 16.4879 30.4676C24.4816 30.4676 30.971 23.9782 30.971 15.9845C30.971 7.99087 24.4816 1.50146 16.4879 1.50146ZM16.4879 2.5003C23.9303 2.5003 29.9722 8.54218 29.9722 15.9845C29.9722 23.4269 23.9303 29.4687 16.4879 29.4687C9.0456 29.4687 3.00371 23.4269 3.00371 15.9845C3.00371 8.54218 9.0456 2.5003 16.4879 2.5003ZM11.355 24.8721C11.355 24.8721 12.3953 21.9785 16.4879 21.9775C20.5806 21.9766 21.6209 24.8721 21.6209 24.8721C21.6639 24.9974 21.7549 25.1004 21.8738 25.1586C21.9928 25.2167 22.13 25.2253 22.2553 25.1823C22.3805 25.1391 22.4834 25.048 22.5416 24.929C22.5997 24.81 22.6082 24.6728 22.5653 24.5475C22.5653 24.5475 21.3827 20.9777 16.4879 20.9787C11.5931 20.9796 10.4106 24.5475 10.4106 24.5475C10.3677 24.6727 10.3762 24.8098 10.4342 24.9288C10.4922 25.0478 10.595 25.139 10.7201 25.1823C10.8455 25.2253 10.9827 25.2168 11.1018 25.1586C11.2208 25.1004 11.3119 24.9974 11.355 24.8721ZM19.7451 15.9975C19.7047 15.3427 19.9424 14.6656 20.4528 14.1551C21.3697 13.2388 22.831 13.1987 23.715 14.0823C24.1999 14.5672 24.4067 15.2289 24.3422 15.8767C24.3294 16.0084 24.3693 16.1399 24.4533 16.2422C24.5373 16.3445 24.6585 16.4094 24.7902 16.4225C24.8554 16.4289 24.9213 16.4225 24.984 16.4035C25.0468 16.3846 25.1052 16.3534 25.1559 16.3119C25.2066 16.2703 25.2486 16.2192 25.2795 16.1614C25.3104 16.1036 25.3297 16.0403 25.3361 15.9751C25.4295 15.0361 25.1243 14.0793 24.4212 13.3761C23.1551 12.11 21.0601 12.1355 19.7467 13.449C19.024 14.1717 18.6903 15.1325 18.7483 16.0599C18.7598 16.1897 18.8215 16.3098 18.9203 16.3947C19.019 16.4796 19.1471 16.5226 19.2771 16.5145C19.4071 16.5064 19.5288 16.4478 19.6162 16.3512C19.7036 16.2546 19.7499 16.1276 19.7451 15.9975ZM8.12719 15.9975C8.08632 15.3427 8.32446 14.6656 8.83491 14.1551C9.75128 13.2388 11.2131 13.1987 12.0966 14.0823C12.582 14.5672 12.7882 15.2289 12.7243 15.8767C12.7178 15.9419 12.7243 16.0077 12.7432 16.0705C12.7622 16.1332 12.7934 16.1916 12.835 16.2423C12.8765 16.293 12.9277 16.335 12.9855 16.3659C13.0433 16.3968 13.1066 16.416 13.1718 16.4225C13.2371 16.429 13.303 16.4226 13.3658 16.4037C13.4286 16.3847 13.487 16.3536 13.5377 16.312C13.5885 16.2705 13.6305 16.2193 13.6615 16.1615C13.6925 16.1037 13.7117 16.0403 13.7182 15.9751C13.8111 15.0361 13.5064 14.0793 12.8028 13.3761C11.5367 12.11 9.44219 12.1355 8.12863 13.449C7.40557 14.1717 7.07251 15.1325 7.13028 16.0599C7.14175 16.1897 7.20345 16.3098 7.30222 16.3947C7.401 16.4796 7.52904 16.5226 7.65904 16.5145C7.78905 16.5064 7.91074 16.4478 7.99817 16.3512C8.0856 16.2546 8.13185 16.1278 8.12707 15.9976L8.12719 15.9975Z" fill="#003944"/>
						</svg>
					</span>
					<span>По вашему запросу ничего не найдено.</span>
				</div>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
				<a href="#" class="search-product">
					<div class="product-thumb">
						<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
					</div>
					<div class="product-content">
						<span>Диван Нумо Мини Textile Silver</span>
						<span>314 530₸</span>
					</div>
				</a>
			</div>
			<div class="search-bg"></div>
		</div>
		<div class="header__top__nav__mobile">
			<nav>
				<ul>
					<li><a href="#">Доставка и оплата</a>
					</li>
					<li><a href="#">Контакты</a></li>
					<li>
						<a href="#">Покупателям</a>
						<ul class="sub-menu">
							<li><a href="#">Доставка и оплата</a>
								<ul class="sub-menu">
									<li><a href="#">Доставка и оплата</a></li>
									<li><a href="#">Доставка и оплата</a></li>
								</ul>
							</li>
							<li><a href="#">Доставка и оплата</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Новости и Акции</a>
						<ul class="sub-menu">
							<li><a href="#">Новости и Акции</a></li>
							<li><a href="#">Новости и Акции</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
		</div>
		<div class="header__top__btns-mobile">
			<div class="header__top__btns__item"> 
				<span>Телефон</span>
				<div class="header__top__btns__contact">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M18.3328 14.1V16.6C18.3338 16.832 18.2863 17.0618 18.1934 17.2744C18.1005 17.4871 17.9642 17.678 17.7932 17.835C17.6222 17.9919 17.4203 18.1114 17.2005 18.1857C16.9806 18.2601 16.7477 18.2877 16.5165 18.2668C13.9522 17.9883 11.4889 17.1121 9.32465 15.7087C7.31118 14.4293 5.6041 12.7222 4.32465 10.7087C2.91638 8.53469 2.04001 6.05951 1.76653 3.4837C1.74571 3.25327 1.77309 3.02102 1.84693 2.80174C1.92077 2.58247 2.03945 2.38096 2.19542 2.21006C2.35139 2.03916 2.54123 1.9026 2.75286 1.80907C2.96449 1.71555 3.19328 1.66711 3.42465 1.66683H5.92465C6.32907 1.66284 6.72114 1.80601 7.02781 2.06968C7.33448 2.33334 7.53483 2.69951 7.59153 3.09995C7.69715 3.89995 7.89278 4.68558 8.17465 5.44183C8.28678 5.74006 8.31105 6.06419 8.24459 6.3758C8.17812 6.68741 8.02371 6.97343 7.79965 7.19995L6.74153 8.2587C7.92787 10.345 9.65527 12.0724 11.7415 13.2587L12.7997 12.2C13.0262 11.9759 13.3122 11.8215 13.6238 11.755C13.9354 11.6886 14.2595 11.7128 14.5578 11.825C15.314 12.1075 16.0997 12.3031 16.8997 12.4087C17.3044 12.4659 17.6741 12.6699 17.9383 12.9818C18.2025 13.2937 18.3429 13.6919 18.3328 14.1006V14.1Z" fill="#003944"/>
						</svg>
						<div class="header__top__btns__contact__wrap">
							<a href="tel:+7 (707) 357-09-17">+7 (707) 357-09-17</a>
							<span>заказать звонок</span>
						</div>
				</div>
			</div>
			<div class="header__top__btns__item"> 
				<span>Язык</span>
				<div class="lang">
					<span>Русский</span>
					<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/wpml-img.svg" alt="Русский">
				</div>
			</div>
			<div class="header__top__btns__item"> 
				<span> Ваш город</span>
				<button class="header__top__btns__local" data-open="popup__local">
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
						<path d="M9.00044 1.50024C5.69204 1.50024 3.00104 4.19124 3.00104 7.49605C2.97854 12.3299 8.77274 16.3385 9.00044 16.5005C9.00044 16.5005 15.0223 12.3299 15.0007 7.50054C14.9991 5.90968 14.3664 4.38445 13.2415 3.25953C12.1165 2.13462 10.5913 1.50191 9.00044 1.50024ZM9.00044 10.5002C8.60646 10.5002 8.21633 10.4226 7.85233 10.2719C7.48834 10.1211 7.15761 9.90011 6.87902 9.62152C6.60043 9.34293 6.37944 9.0122 6.22866 8.6482C6.07789 8.28421 6.00029 7.89408 6.00029 7.50009C6.00029 7.10611 6.07789 6.71598 6.22866 6.35199C6.37944 5.98799 6.60043 5.65726 6.87902 5.37867C7.15761 5.10008 7.48834 4.87909 7.85233 4.72832C8.21633 4.57755 8.60646 4.49994 9.00044 4.49994C9.39443 4.49994 9.78455 4.57755 10.1485 4.72832C10.5125 4.87909 10.8433 5.10008 11.1219 5.37867C11.4005 5.65726 11.6214 5.98799 11.7722 6.35199C11.923 6.71598 12.0006 7.10611 12.0006 7.50009C12.0006 7.89408 11.923 8.28421 11.7722 8.6482C11.6214 9.0122 11.4005 9.34293 11.1219 9.62152C10.8433 9.90011 10.5125 10.1211 10.1485 10.2719C9.78455 10.4226 9.39443 10.5002 9.00044 10.5002Z" fill="#003944"/>
						</svg>
							Алматы
				</button>
			</div>
		</div>
	</div>
<!-- конец мобильного меню -->
</div>
<!-- конец header-top -->
<div class="header__bottom">
	<div class="container">
		<div class="header__bottom__container">
			<div class="burger">
				<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
			</div>
			<a href="<?= get_home_url(); ?>" class="logo">
				<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/logo-footer.svg" alt="HEADGROUP">
			</a>
			<div class="header__bottom__form header__form">
				<!-- форма такая же как и в топе -->
				<form action="">
					<div class="input__search">
					<input type="search" name="header_search" placeholder="Поиск...">
				</div>
				</form>
				
				<div class="header__search-results">
					<div class="header__search-results__title">Результат поиска</div>
					<div class="search__error">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4879 1.50146C8.49429 1.50146 2.00488 7.99087 2.00488 15.9845C2.00488 23.9782 8.49429 30.4676 16.4879 30.4676C24.4816 30.4676 30.971 23.9782 30.971 15.9845C30.971 7.99087 24.4816 1.50146 16.4879 1.50146ZM16.4879 2.5003C23.9303 2.5003 29.9722 8.54218 29.9722 15.9845C29.9722 23.4269 23.9303 29.4687 16.4879 29.4687C9.0456 29.4687 3.00371 23.4269 3.00371 15.9845C3.00371 8.54218 9.0456 2.5003 16.4879 2.5003ZM11.355 24.8721C11.355 24.8721 12.3953 21.9785 16.4879 21.9775C20.5806 21.9766 21.6209 24.8721 21.6209 24.8721C21.6639 24.9974 21.7549 25.1004 21.8738 25.1586C21.9928 25.2167 22.13 25.2253 22.2553 25.1823C22.3805 25.1391 22.4834 25.048 22.5416 24.929C22.5997 24.81 22.6082 24.6728 22.5653 24.5475C22.5653 24.5475 21.3827 20.9777 16.4879 20.9787C11.5931 20.9796 10.4106 24.5475 10.4106 24.5475C10.3677 24.6727 10.3762 24.8098 10.4342 24.9288C10.4922 25.0478 10.595 25.139 10.7201 25.1823C10.8455 25.2253 10.9827 25.2168 11.1018 25.1586C11.2208 25.1004 11.3119 24.9974 11.355 24.8721ZM19.7451 15.9975C19.7047 15.3427 19.9424 14.6656 20.4528 14.1551C21.3697 13.2388 22.831 13.1987 23.715 14.0823C24.1999 14.5672 24.4067 15.2289 24.3422 15.8767C24.3294 16.0084 24.3693 16.1399 24.4533 16.2422C24.5373 16.3445 24.6585 16.4094 24.7902 16.4225C24.8554 16.4289 24.9213 16.4225 24.984 16.4035C25.0468 16.3846 25.1052 16.3534 25.1559 16.3119C25.2066 16.2703 25.2486 16.2192 25.2795 16.1614C25.3104 16.1036 25.3297 16.0403 25.3361 15.9751C25.4295 15.0361 25.1243 14.0793 24.4212 13.3761C23.1551 12.11 21.0601 12.1355 19.7467 13.449C19.024 14.1717 18.6903 15.1325 18.7483 16.0599C18.7598 16.1897 18.8215 16.3098 18.9203 16.3947C19.019 16.4796 19.1471 16.5226 19.2771 16.5145C19.4071 16.5064 19.5288 16.4478 19.6162 16.3512C19.7036 16.2546 19.7499 16.1276 19.7451 15.9975ZM8.12719 15.9975C8.08632 15.3427 8.32446 14.6656 8.83491 14.1551C9.75128 13.2388 11.2131 13.1987 12.0966 14.0823C12.582 14.5672 12.7882 15.2289 12.7243 15.8767C12.7178 15.9419 12.7243 16.0077 12.7432 16.0705C12.7622 16.1332 12.7934 16.1916 12.835 16.2423C12.8765 16.293 12.9277 16.335 12.9855 16.3659C13.0433 16.3968 13.1066 16.416 13.1718 16.4225C13.2371 16.429 13.303 16.4226 13.3658 16.4037C13.4286 16.3847 13.487 16.3536 13.5377 16.312C13.5885 16.2705 13.6305 16.2193 13.6615 16.1615C13.6925 16.1037 13.7117 16.0403 13.7182 15.9751C13.8111 15.0361 13.5064 14.0793 12.8028 13.3761C11.5367 12.11 9.44219 12.1355 8.12863 13.449C7.40557 14.1717 7.07251 15.1325 7.13028 16.0599C7.14175 16.1897 7.20345 16.3098 7.30222 16.3947C7.401 16.4796 7.52904 16.5226 7.65904 16.5145C7.78905 16.5064 7.91074 16.4478 7.99817 16.3512C8.0856 16.2546 8.13185 16.1278 8.12707 15.9976L8.12719 15.9975Z" fill="#003944"/>
							</svg>
						</span>
						<span>По вашему запросу ничего не найдено.</span>
					</div>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver Диван Нумо Мини Textile SilverДиван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
					<a href="#" class="search-product">
						<div class="product-thumb">
							<img src="<?= HEADGROUP_THEME_DIRECTORY ?>assets/images/popular-cat.png" alt="Диван">
						</div>
						<div class="product-content">
							<span>Диван Нумо Мини Textile Silver</span>
							<span>314 530₸</span>
						</div>
					</a>
				</div>
				<div class="search-bg"></div>
				
			</div>
			<div class="header__bottom__icons">
				<a href="#" class="header__bottom__icons__item">
					<svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
					<path d="M17.256 2.556C17.7622 3.04632 18.1658 3.63247 18.4433 4.28032C18.7208 4.92816 18.8666 5.62474 18.8722 6.32948C18.8778 7.03422 18.7431 7.73303 18.4759 8.3852C18.2088 9.03737 17.8145 9.62986 17.3161 10.1282C16.8178 10.6265 16.2252 11.0206 15.573 11.2876C14.9208 11.5546 14.2219 11.6892 13.5172 11.6835C12.8125 11.6778 12.1159 11.5319 11.4681 11.2543C10.8203 10.9767 10.2342 10.573 9.744 10.0667C8.76257 9.06747 8.21547 7.7211 8.22176 6.32054C8.22804 4.91998 8.7872 3.57857 9.77755 2.58822C10.7679 1.59787 12.1093 1.03871 13.5099 1.03242C14.9104 1.02614 16.2568 1.57457 17.256 2.556ZM13.5 15.6773C19.572 15.6773 25.5 18.3 25.5 22.3333V23.6667C25.5 24.0203 25.3595 24.3594 25.1095 24.6095C24.8594 24.8595 24.5203 25 24.1667 25H2.83333C2.47971 25 2.14057 24.8595 1.89052 24.6095C1.64048 24.3594 1.5 24.0203 1.5 23.6667V22.3333C1.5 18.2987 7.428 15.6773 13.5 15.6773Z" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span>Аккаунт</span>
				</a>
				<a href="#" class="header__bottom__icons__item">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
						<path d="M16.5222 1C20.3967 1 23 4.53875 23 7.84C23 14.5256 12.1956 20 12 20C11.8044 20 1 14.5256 1 7.84C1 4.53875 3.60333 1 7.47778 1C9.70222 1 11.1567 2.08063 12 3.03063C12.8433 2.08063 14.2978 1 16.5222 1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="header__bottom__icons__item__count">0</div>
					<span>Избранное</span>
				</a>
				<a href="#" class="header__bottom__icons__item">
					<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
						<g clip-path="url(#clip0_810_18540)">
						<path d="M22.53 0.38C22.477 0.286556 22.4056 0.204893 22.32 0.14C22.2256 0.0691226 22.1161 0.0211901 22 0L0 0V1.6H2.58L6.49 12.35C6.70686 12.958 7.1047 13.4849 7.63 13.86C8.15702 14.2308 8.78563 14.4298 9.43 14.43H19.09V12.85H9.43C9.11201 12.8478 8.80199 12.7502 8.54 12.57C8.28865 12.3843 8.1002 12.126 8 11.83L7.27 9.77H18.62C19.0459 9.76571 19.4593 9.62558 19.8 9.37C20.1364 9.12221 20.3823 8.77093 20.5 8.37L22.6 1C22.6245 0.891364 22.6245 0.778636 22.6 0.67C22.5931 0.570083 22.5695 0.47204 22.53 0.38ZM18.87 8.18H6.66L4.26 1.6H20.74L18.87 8.18ZM10.52 16.75C10.26 16.4941 9.90981 16.3507 9.545 16.3507C9.18019 16.3507 8.83001 16.4941 8.57 16.75C8.31052 17.0179 8.16684 17.3771 8.17 17.75C8.16566 17.9351 8.19886 18.1191 8.26761 18.291C8.33636 18.4628 8.43923 18.619 8.57 18.75C8.83244 19.0012 9.18171 19.1414 9.545 19.1414C9.90829 19.1414 10.2576 19.0012 10.52 18.75C10.6508 18.619 10.7536 18.4628 10.8224 18.291C10.8911 18.1191 10.9243 17.9351 10.92 17.75C10.9232 17.3771 10.7795 17.0179 10.52 16.75ZM17.52 16.75C17.389 16.6192 17.2328 16.5164 17.061 16.4476C16.8891 16.3789 16.7051 16.3457 16.52 16.35C16.3384 16.3487 16.1584 16.3835 15.9903 16.4523C15.8223 16.5212 15.6696 16.6228 15.5412 16.7512C15.4128 16.8796 15.3112 17.0323 15.2423 17.2003C15.1735 17.3684 15.1387 17.5484 15.14 17.73C15.1357 17.9151 15.1689 18.0991 15.2376 18.271C15.3064 18.4428 15.4092 18.599 15.54 18.73C15.8047 18.9767 16.1531 19.1139 16.515 19.1139C16.8769 19.1139 17.2253 18.9767 17.49 18.73C17.6208 18.599 17.7236 18.4428 17.7924 18.271C17.8611 18.0991 17.8943 17.9151 17.89 17.73C17.8961 17.3681 17.7637 17.0176 17.52 16.75Z" fill="white"/>
						</g>
						<defs>
						<clipPath id="clip0_810_18540">
						<rect width="22.64" height="19.09" fill="white"/>
						</clipPath>
						</defs>
						</svg>
						<div class="header__bottom__icons__item__count">0</div>
					<span>Корзина</span>
				</a>
			</div>
		</div>
	</div>
</div>
	</header>