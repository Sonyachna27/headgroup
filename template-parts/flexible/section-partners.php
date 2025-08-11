<?php 
    $partners_title = get_sub_field('partners_title');
    $partners_description = get_sub_field('partners_description');
?>  
<?php if( have_rows('partners') ): ?>
<section class="partners mb-m">
	<div class="container">
		<div class="partners__container">
			<div class="partners__title justify-title">
                <?php if($partners_title) : ?>
				    <h2><?= $partners_title; ?></h2>
                <?php endif; ?>
                <?php if($partners_description) : ?>
				    <p><?= $partners_description ?></p>
                <?php endif;?>
			</div>
			
		</div>
	</div>

	<div class="parnters__marquee marquee">
		<div class="partners__marquee__wrap marquee__wrap">
                <?php while( have_rows('partners') ): the_row(); 
                    $partners_logo = get_sub_field('partners_logo');
                    $partners_link = get_sub_field('partners_link');
                    
                    ?>
                        <?php if($partners_logo) : ?>
                        <?php if ( $partners_link ) : ?>
                            <span>
                            <a href="<?= esc_url( $partners_link ); ?>" target="_blank" rel="nofollow">
                                <img src="<?= esc_url( $partners_logo ); ?>" alt="<?= esc_attr( get_the_title() ); ?>">
                            </a>
                            </span>
                        <?php else : ?>
                            <span>
                                <img src="<?= esc_url( $partners_logo ); ?>" alt="<?= esc_attr( get_the_title() ); ?>">
                            </span>
                        <?php endif; ?>
                        <?php endif; ?>
                <?php endwhile; ?>
				</div>
			</div>
</section>
<?php endif; ?>
