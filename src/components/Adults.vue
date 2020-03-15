<template>
  <div id="Adults">
    <StoreNav>
      <!--End of NAV CARD-->

      <!--Start of Card Body-->
      <div class="card-body">
        <h3 class="text-center text-upper py-3">Adult Clothing</h3>
        <p class="card-text lead">Don't see what your looking for? We also offer custome work too!</p>
        <div class="row">
          <div class="col-md-4 text-center py-3" v-for="item in adultClothes" :key="item">
            <div class="card">
              <img :src="item.image" :alt="item.name" class="card-image-top" />
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <div class="card-text py-3">{{ item.price / 100 }}.00</div>
                <div class="row justify-content-end">
                  <button class="btn-block btn-danger">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StoreNav>
    <!--Start of CARD Body-->
  </div>
</template>

<script>
import StoreNav from "./StoreNav";

export default {
  name: "Adults",
  components: {
    StoreNav
  },
  data() {
    return {
      adultClothes: [
        {
          invId: 1,
          name: "Adult Shirt Green",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:5ca249fb3a3d6fcba666aaba51eb9dc8=============================/p/Adult%20green.jpg?allowdd=0&datakey=qF/8JMADjkXEe5qIQjFe2DFi8ityXViNXUUo9a4bToxMtv45WZU3PU12PI/JJ8Xhjox0mM860fi201uQQkopmr05kfehzqVCvNJ6DqXHBdWGRMUst0ZDFCd8UpPDguJz55tcoF+ebANP4DS/8srsGndP8JkvqGtToy57qDoaySuhm0+XnWs3JUBuzUvuMlijkCrY7RzcBQp8jL3tqKpWEIt7tW9tJIHm6zHYhWm92GFWlyTyPlQ/PUXi974cmLyfKD7n4fPu5dMAZ6YXpEUFayG9UUD7jXnSoOmeWJ48Eq9VOB2yXKlsSIARGHKmdh/0LVNpzTYGMH+zT7FWg6c23g&engine=ln-3.1.31&errurl=LKuteyBXuqDrBKU9QOTUyDLnjBNx09w//bITyJY4RndQKtzNq2vtcVIC3Mp8ucOXVAc2mUrp8ITM3MXSN1xXOH7ktdlB3x02xy0PPpgLWuoxa3sKxp6WS/LbNxAz53h95UEQOPSU9Prbag/IL0UaoV1Zsr46KNkHKIiEcHsMQvlZE814ewlI6xQtVRh5k2Xc6G0dQvKK+ZBW/aNhIczrE8oGr1jDm4KIZ9OiuYhzKMpl7+NL7dtb+M/Ewsg2f1UUx+mkkyee291AdRYIFzVMXmMh/mgGjS7K44DXCHk+sR+jVZLESwNcvo2wBELWoetusH8Ws2Ur7qRfyG18Qjn0Eg==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQlMjBncmVlbi5qcGciO2ZpbGVuYW1lKj1VVEYtOCcnQWR1bHQlMjBncmVlbi5qcGc7&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=cb23ae710&linkoid=544230002&mode=100&sharelink_id=8358362460002&timestamp=1584154518765&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=6845eaa73da6b1b6c85e2efdba856f57f1133f4a&cachekey=60:5ca249fb3a3d6fcba666aaba51eb9dc8=============================",
          price: 3000
        },
        {
          invId: 2,
          name: "Adult Long Sleeve",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:e570977b877a5878ca3e7183ed9a8c34=============================/p/Adult%20long%20sleeve.jpg?allowdd=0&datakey=UG2/mQvrPv6hmAErt72HmPnUZJSgVefWrot+7o7E4HEulpoKtcQvMMOVFiPUZKIByLSc1Cu3ZDsfGAzGZu4bSQqLCdK3eYdxvYZeS38Y9MBGAFr+Tpx9GuJs5zR2Jtdqua3Q14yKtFEKOiCY+6irvK9rILgR0iBQ8X1WiMXva2VOgJAJlkX+Z0ekRGkm1fENYTE9Dpxts+NMrNZd+fcrDj5LjLbX6TQGLRT+bf9GZMPvB0wC6cQiASGEz6elNYEAtuGNKe3y2Q5Cvk7NbQ1yeqybh1b6zZaSwvsbOj1Ln87TYGiYHiym1EyFT1Wn4KkgKg1uu5JTASxJIxXEOGo7dg&engine=ln-3.1.31&errurl=KxXZKxyl521S/TAmWmrkW2Hos5shWqX+wult5Hwj/IiZI94q7imNiCnBvYNesMDPHlt4wYO7H81xmr4HaN5AuK3Rscw07x5/RGYk669Ww2sc5IJam6OaUBmAFCQa2p67mx1SF3bSF1foHn9y4EKWNIlVvELPySTmvXN+WePkyr9KUmPBgMXTMBhXeNVc42dZgVmM7MXFiY0W3qgP2T44/CLQtyGBEaprps71DjZyRve38HUtSnzE8igq7Po8HMQpxTZSz+/SIV2QjrVw6AObpMuBwXAYn3NOf6pUK2kCpO4rTsytahPD4VOtYk7zlTqJdaRyw+g+ZoWFG0MEALfXqQ==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQlMjBsb25nJTIwc2xlZXZlLmpwZyI7ZmlsZW5hbWUqPVVURi04JydBZHVsdCUyMGxvbmclMjBzbGVldmUuanBnOw&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=06d51ddc0&linkoid=544230002&mode=100&sharelink_id=8358362470002&timestamp=1584154591752&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=81e520886de7f261eca32454bf50a77a5276d1e9&cachekey=60:e570977b877a5878ca3e7183ed9a8c34=============================",
          price: 2000
        },
        {
          invId: 3,
          name: "Adult Flannel Grey",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:8cd0aaf02f795a0da3d9ad6d41ee77ca=============================/p/Adult-Flannel.jpg?allowdd=0&datakey=W6qYjgxPvbdaPHEO4ZLcRObcLB58KXLY1C/k4pDSGNzlZ9naQqe1CU8jKdZS7l3MemC1zPv6n9j1dgJ9Rm6Xu+jWwR/01tmz43riOtL5Y9xD1QCrFvCODD88Vw2w0Pa7dLrrJAnmFYWZ76zhhyYoNkrxfx1OnlWTtP6fHSKoILN1hbv/Uvhg7YQkbQaCQW+ptJMKt5tBb1FVbveFItTsmWgwpYu21L/cL8JOc3EXwugkkZVecIJzmoW4BhYCxTpmhdqwICK5ym6xFx/AKoQIRxXXO5Wi7NEZvD+g3Tc0+Vge2jYONde5PmXle/FOdSpUyGKY5A2sOCnBhKZBaR6X+Q&engine=ln-3.1.31&errurl=putPkia8znETXhCEnZMyJUmjiR7mQbV3v+o0KrOoQqy7FzM0eD5V1ErhD0GzK1+mOYvdiVf4b2PZY2Bs/XKvLmCRev1L0drlqIvOqtPY+ymCxMUNI6yANUdESR+xXm1xvmgLLVFXxYm3/e8/2oMzNRb01Q1v6WvfoFvEZYAxCi+/B+N//qmX1Hs41u3fmrnV6+xssoe+/dbUILeLT4No4SDDbSKVLc2kPNq9QUyb/dCRHJ5HRBWqpK8Az3UWGQeKOmCrNmyeklZim3aocuCZIKETEXYVheMmpAMrzsAMJ5+8f3fYXwpmpiNxWY4+tDs+OGhFVmvRj5fBF94ERytjzQ==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQtRmxhbm5lbC5qcGciO2ZpbGVuYW1lKj1VVEYtOCcnQWR1bHQtRmxhbm5lbC5qcGc7&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=4b900c1d0&linkoid=544230002&mode=100&sharelink_id=8358362490002&timestamp=1584154855259&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=a96a2f17c82e99a37c24766f11b400ed1dcc58a0&cachekey=60:8cd0aaf02f795a0da3d9ad6d41ee77ca=============================",
          price: 4500
        },
        {
          invId: 4,
          name: "Placeholder",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:a62e55cab8ffc32df68d809d75fc121c=============================/p/placeholder.jpg?allowdd=0&datakey=QmzGlaxblVNUcZefA/okg56ef0Zu88MIsGl8VAdE3ZNiYVngDVeESz6axW4FgsP0cmAkaprDb1kWhLKxiHZhb1oHUwwW3KLINRvZJp6V09wouEYWX+rXxeNvhuB0fNMU64a/isuar8wQwUhLsA6tX/EHGpHxRXIUdPxWIVS44kqlWEsGlvWqtukMKpDts3TqFZxIklhCklrgJM9OPwaiEyrdHbPJs2QAXSVuNJvkP3qrjBTOu1RHrhy1K03s9LyA8vvDb01HrqsTKgritgXFl4P5wnTqTl01uqIt6aKUIPGmibxKCtPSU2GN9xklNP1mqJ5/8kLX/xQLeKOe3rf5zA&engine=ln-3.1.31&errurl=WmnLq0BYQjpUgdc4vFol1a6ajbjTW6q0IvDZttUV9jXuDFWDh0zPz4VNjtTcG31BJlcVZENG1tNhjArLy8nkVIz4nagi0pII2dt9s8+XGqAbUj4FELKMSjAIrZlrtSe45DpbZUYt0JFN6D9s2yQSQ5yI+zN+S9kfF/dfvtsLkC94/4iW+hYhDW/eHKOXuqDnNdjTdaHyWPoN1YBBi6ziTVo/deFHuhAhvPivec61InKqrw0FEtqflNfMEodTXxNK7tnr5N1fLTc6O4P5nT5egtQolzweDuF1QXZiRkj5253pn6/UryELb6FFLxxZB9noXDFzsah56cdQjEfU14QVMA==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icGxhY2Vob2xkZXIuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ3BsYWNlaG9sZGVyLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=507e482c0&linkoid=544230002&mode=100&sharelink_id=8358466760002&timestamp=1584219812560&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=f4072a9b5703b5c0c927f02e19ec194c0acc4533&cachekey=60:a62e55cab8ffc32df68d809d75fc121c=============================",
          price: 99999999
        },
        {
          invId: 5,
          name: "Placeholder",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:a62e55cab8ffc32df68d809d75fc121c=============================/p/placeholder.jpg?allowdd=0&datakey=QmzGlaxblVNUcZefA/okg56ef0Zu88MIsGl8VAdE3ZNiYVngDVeESz6axW4FgsP0cmAkaprDb1kWhLKxiHZhb1oHUwwW3KLINRvZJp6V09wouEYWX+rXxeNvhuB0fNMU64a/isuar8wQwUhLsA6tX/EHGpHxRXIUdPxWIVS44kqlWEsGlvWqtukMKpDts3TqFZxIklhCklrgJM9OPwaiEyrdHbPJs2QAXSVuNJvkP3qrjBTOu1RHrhy1K03s9LyA8vvDb01HrqsTKgritgXFl4P5wnTqTl01uqIt6aKUIPGmibxKCtPSU2GN9xklNP1mqJ5/8kLX/xQLeKOe3rf5zA&engine=ln-3.1.31&errurl=WmnLq0BYQjpUgdc4vFol1a6ajbjTW6q0IvDZttUV9jXuDFWDh0zPz4VNjtTcG31BJlcVZENG1tNhjArLy8nkVIz4nagi0pII2dt9s8+XGqAbUj4FELKMSjAIrZlrtSe45DpbZUYt0JFN6D9s2yQSQ5yI+zN+S9kfF/dfvtsLkC94/4iW+hYhDW/eHKOXuqDnNdjTdaHyWPoN1YBBi6ziTVo/deFHuhAhvPivec61InKqrw0FEtqflNfMEodTXxNK7tnr5N1fLTc6O4P5nT5egtQolzweDuF1QXZiRkj5253pn6/UryELb6FFLxxZB9noXDFzsah56cdQjEfU14QVMA==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icGxhY2Vob2xkZXIuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ3BsYWNlaG9sZGVyLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=507e482c0&linkoid=544230002&mode=100&sharelink_id=8358466760002&timestamp=1584219812560&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=f4072a9b5703b5c0c927f02e19ec194c0acc4533&cachekey=60:a62e55cab8ffc32df68d809d75fc121c=============================",
          price: 999999
        },
        {
          invId: 6,
          name: "Placeholder",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:a62e55cab8ffc32df68d809d75fc121c=============================/p/placeholder.jpg?allowdd=0&datakey=QmzGlaxblVNUcZefA/okg56ef0Zu88MIsGl8VAdE3ZNiYVngDVeESz6axW4FgsP0cmAkaprDb1kWhLKxiHZhb1oHUwwW3KLINRvZJp6V09wouEYWX+rXxeNvhuB0fNMU64a/isuar8wQwUhLsA6tX/EHGpHxRXIUdPxWIVS44kqlWEsGlvWqtukMKpDts3TqFZxIklhCklrgJM9OPwaiEyrdHbPJs2QAXSVuNJvkP3qrjBTOu1RHrhy1K03s9LyA8vvDb01HrqsTKgritgXFl4P5wnTqTl01uqIt6aKUIPGmibxKCtPSU2GN9xklNP1mqJ5/8kLX/xQLeKOe3rf5zA&engine=ln-3.1.31&errurl=WmnLq0BYQjpUgdc4vFol1a6ajbjTW6q0IvDZttUV9jXuDFWDh0zPz4VNjtTcG31BJlcVZENG1tNhjArLy8nkVIz4nagi0pII2dt9s8+XGqAbUj4FELKMSjAIrZlrtSe45DpbZUYt0JFN6D9s2yQSQ5yI+zN+S9kfF/dfvtsLkC94/4iW+hYhDW/eHKOXuqDnNdjTdaHyWPoN1YBBi6ziTVo/deFHuhAhvPivec61InKqrw0FEtqflNfMEodTXxNK7tnr5N1fLTc6O4P5nT5egtQolzweDuF1QXZiRkj5253pn6/UryELb6FFLxxZB9noXDFzsah56cdQjEfU14QVMA==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icGxhY2Vob2xkZXIuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ3BsYWNlaG9sZGVyLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=507e482c0&linkoid=544230002&mode=100&sharelink_id=8358466760002&timestamp=1584219812560&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=f4072a9b5703b5c0c927f02e19ec194c0acc4533&cachekey=60:a62e55cab8ffc32df68d809d75fc121c=============================",
          price: 999999
        }
      ]
    };
  }
};
</script>
<style>
div#nav-store {
  background-color: #587886;
}
a#active-link {
  background-color: #04b0fc;
}
</style>
