<?php if( have_rows('example') ): ?>
    <?php while( have_rows('example') ): the_row(); 
        $example_title = get_sub_field('example_title');
        $example_description = get_sub_field('example_description');
        $example_image = get_sub_field('example_image');
        $example_content = get_sub_field('example_content');
        ?>
<section class="example mb-s">
    <div class="container">
        <div class="example__container">
            <div class="example__title justify-title">
                <?php if($example_title) : ?>
                    <h2><?= $example_title ?></h2>
                <?php endif;?>
                <?php if($example_description) : ?>
                    <p><?= $example_description ?></p>
                <?php endif; ?>
            </div>
            <div class="example__content">
                <?php if($example_image) : ?>
                <div class="example__img">
                    <img src="<?= $example_image ?>" alt="<?= $example_title ? $example_title : get_the_title(); ?>">
                </div>
                <?php endif; ?>
                <?php if($example_content) : ?>
                <div class="example__info">
                    <?= $example_content ?>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
    <?php endwhile; ?>
<?php endif; ?>
