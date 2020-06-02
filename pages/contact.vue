<template>
    <div>
       <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html" class="secondColor">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Contact</strong></div>
        </div>
      </div>
    

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="h3 mb-3 text-black">Contactez-nous</h2>
          </div>
          <div class="col-md-7">

            <form  name="contact" method="post" netlify-honeypot="bot-field" netlify>
               
              <input type="hidden" name="form-name" value="contact" />

              <div class="p-3 p-lg-5 border">
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_fname" class="text-black">First Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="firstname">
                  </div>
                  <div class="col-md-6">
                    <label for="c_lname" class="text-black">Last Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="lastname">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_email" class="text-black">Email <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" name="email">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_subject" class="text-black">Subject </label>
                    <input type="text" class="form-control" name="subject">
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_message" class="text-black">Message </label>
                    <textarea name="message"  cols="30" rows="7" class="form-control"></textarea>
                  </div>
                </div>

               
                <div class="form-group row">
                  <div class="col-lg-12">
                    <input type="submit" class="btn btn-primary btn-lg btn-block" value="Send Message" style="background-color:#7971ea">
                  </div>
                </div>
              </div>
            </form>
          </div>
        
        </div>
      </div>
    </div>

    </div>
</template>

<style scoped>
.secondColor{
  color: #7971ea;
}
</style>>