<?php 
$idea_term   = get_sub_field('idea_term');
$idea_title  = get_sub_field('idea_title');
$idea_button = get_sub_field('idea_button');

if ( have_rows('idea_blocks') ) : ?>
<section class="idea mb-m">
    <div class="container">
        <div class="idea__container">

            <div class="idea__title"> 
                <?php if ( $idea_term ) : ?>
                    <span class="term"><?= esc_html( $idea_term ); ?></span>
                <?php endif; ?>

                <?php if ( $idea_title ) : ?>
                    <h2><?=  $idea_title ; ?></h2>
                <?php endif; ?>
            </div>

            <div class="idea__items fancy__list__items">
                <?php 
                $counter = 1;
                while ( have_rows('idea_blocks') ) : the_row(); 
                    $idea_blocks_title       = get_sub_field('idea_blocks_title');
                    $idea_blokcs_description = get_sub_field('idea_blokcs_description'); 
                    $idea_blokcs_icon        = get_sub_field('idea_blokcs_icon');        
                    ?>
                    <div class="idea__item fancy__list__item">
                        <div class="idea__item__top fancy__list__item__top">
                            <div class="idea__item__count fancy__list__item__count">
                                <span><?= str_pad($counter, 2, '0', STR_PAD_LEFT); ?></span>
                                <?php if ( $idea_blokcs_icon ) : ?>
                                    <img src="<?= esc_url( $idea_blokcs_icon ); ?>" alt="<?= esc_attr( $idea_blocks_title ?: get_the_title() ); ?>">
                                <?php endif; ?>
                            </div>
                            <?php if ( $idea_blocks_title ) : ?>
                                <div class="idea__item__promo fancy__list__item__promo">
                                    <?= $idea_blocks_title ; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                        <?php if ( $idea_blokcs_description ) : ?>
                            <div class="idea__item__bottom fancy__list__item__bottom">
                                <?= $idea_blokcs_description ; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                    <?php 
                    $counter++;
                endwhile; 
                ?>
            </div>
            <?php if ( !empty($idea_button['url']) && !empty($idea_button['title']) ) : ?>
                <a href="<?= $idea_button['url'] ?>" class="btn btn-secondary"><?= $idea_button['title'] ?></a>
            <?php endif; ?>

        </div>
    </div>
</section>
<?php endif; ?>
