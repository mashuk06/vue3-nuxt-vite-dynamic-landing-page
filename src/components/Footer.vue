<script setup>
    const footerObj = {
        'currentYear' : new Date().getFullYear(),
        'address' : '2005 Stokes Isle Apt. 896, Coffee Cafe Center, USA.',
        'email' : 'info@mail.com',
        'emailLink' : 'mailto:info@mail.com',
        'phone' : '+(21)-255-886-1234',
        'phoneLink' : 'tel:+(21)-255-886-1234',
    }
    const { currentYear, address, email, emailLink, phone ,phoneLink } = footerObj;
</script>

<template>
    <section class="w3l-footer-29-main">
        <div class="footer-29 py-5">
            <div class="container py-lg-4 py-sm-3">
                <div class="row footer-top-29">
                    <div class="col-lg-5 footer-list-29 footer-1">
                        <h2><a href="#" class=""><span class="fa fa-coffee"></span> Coffee Cafe</a></h2>
                        <p>We make the delicious coffee for the coffee lovers. We are a team of dedicated coffee fans
                            who
                            celebrate
                            exceptional coffee brands and roasters by providing our guests the unique opportunity to try
                            coffee drinks
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                        <h6 class="footer-title-29">Get in Touch</h6>

                        <div class="column2">
                            <div class="mb-2">
                                <span>Address :</span>
                                <p class="contact-para d-inline">{{ address }}</p>
                            </div>
                            <div class="">
                                <span>E-mail :</span><a :href="emailLink">{{ email }}</a>
                            </div>
                            <div class="mt-2">
                                <span>Phone :</span><a :href="phoneLink">{{ phone }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5">
                        <h6 class="footer-title-29">Newsletter </h6>
                        <p>Enter your email and receive the latest news from us. We'll never share your email address
                        </p>

                        <form action="#" class="subscribe" method="post">
                            <input type="email" name="email" placeholder="Your Email Address" required="">
                            <button><span class="fa fa-paper-plane"></span></button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        <div class="bottom-copies text-center">
            <div class="container">
                <p class="copy-footer-29">© {{ currentYear }} Coffee Cafe. All rights reserved. </p>
            </div>
        </div>

        <!-- move top -->
        <button onclick="topFunction()" id="movetop" title="Go to top">
            <span class="fa fa-angle-up"></span>
        </button>
        <!-- //move top -->
    </section>
</template>
