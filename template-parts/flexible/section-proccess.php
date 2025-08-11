<?php 
$proccess_title = get_sub_field('proccess_title');
?>
<section class="process mb-m">
    <div class="container">
        <div class="process__container">
            
            <?php if ( $proccess_title ) : ?>
                <div class="process__title">
                    <h2><?=  $proccess_title; ?></h2>
                </div>
            <?php endif; ?> 

            <?php if ( have_rows('proccess') ) : ?>
                <div class="process__items fancy__items">
                    <?php 
                    $counter = 1;
                    while ( have_rows('proccess') ) : the_row(); 
                        $proccess_block_title       = get_sub_field('proccess_block_title');
                        $proccess_block_description = get_sub_field('proccess_block_description');
                        $proccess_block_icon        = get_sub_field('proccess_block_icon');
                    ?>
                        <div class="process__item fancy-bg">
                            
                            <div class="process__item__content fancy-content">
                                <?php if ( $proccess_block_title ) : ?>
                                    <div class="process__item__content__title fancy-content__title">
                                        <h3><?= $proccess_block_title; ?></h3>
                                    </div>
                                <?php endif; ?>

                                <?php if ( $proccess_block_description ) : ?>
                                    <div class="process__item__content__info fancy-content__info">
                                        <?= wp_kses_post( $proccess_block_description ); ?>
                                    </div>
                                <?php endif; ?>
                            </div>

                            <div class="process__item__count fancy-bg__variation">
                                <?php if ( $proccess_block_icon ) : ?>
                                    <img src="<?= esc_url( $proccess_block_icon ); ?>" alt="<?= esc_attr( $proccess_block_title ?: get_the_title() ); ?>">
                                <?php else : ?>
                                    <span><?= str_pad($counter, 2, '0', STR_PAD_LEFT); ?></span>
                                <?php endif; ?>
                            </div>
                        </div>
                    <?php 
                        $counter++;
                    endwhile; 
                    ?>
                </div>
            <?php endif; ?>

        </div>
    </div>
</section>
