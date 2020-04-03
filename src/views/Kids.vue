<template>
  <div id="Kids">
    <!--Start of NAV CARD
    create <storeNav />-->
    <h1 class="text-center heading-1 py-3">SquatchLand Store</h1>
    <div id="nav-store" class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item">
          <router-link to="/hats" class="nav-link">Hats</router-link>
        </li>
        <li class="nav-item">
          <router-link id="active-link" to="/kids" class="nav-link active">Kids</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/adults" class="nav-link">Adults</router-link>
        </li>
      </ul>
    </div>

    <!--End of NAV CARD-->

    <!--Start of Card Body-->
    <div class="card-body">
      <h3 class="text-center text-uppercase py-3">Kids Clothing</h3>
      <p
        class="card-text text-center lead"
      >Don't see what your looking for? We also offer custome work too!</p>
      <div class="row">
        <div class="col-md-4 text-center py-3" v-for="item in kidsClothes" :key="item.kids">
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
    <!--Start of CARD Body-->
  </div>
</template>

<script>
export default {
  name: "Kids",
  data() {
    return {
      kidsClothes: [
        {
          invId: 1,
          name: "Kids Shirt",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:ad15e02d2c679036a218d161e2867687=============================/p/Kids-Front-White.jpg?allowdd=0&datakey=oko/RYwAZA3pDw/sTsYuVpLIn5rG7BanezFbMdTGK2HZzwoNKWSgHV3uJrg35Qozkl83sbZZNS9ZLohL8X0Gy0xbFaoY7TMQlKWj6+z9aFffqIroaQGL7fOE6BWNqRHs6pdpF8WazqEt8uBqSrhdHHSiXlXyp0uWBc1jdwYbl7BkWax/Xb86iRmR8bYhH9NCki2zUDwD5Z3xNbqk5fwwDovpMRBDK74WyalqvR4ReWqg9iGReHiqdvDqM9xGByDFwbm43w6QNfxtubl0ewfCpqRGwM0Ym5QHmgzllkt8/CJRX6aJUEbsVunX/bGJ5VZrhGFJZcTEfFmtDkCV1exXNw&engine=ln-3.1.31&errurl=kBDL56yfaksJxEsLpFf4ctCAcYIL9b7wV1tUKOFTLBGLpaqlyo5uHDviDjo9DgPwdZJCu3dOY4J9Ek2F1Wj5KeS1HRwqwIt0VdOd7de8zDXPlRsJjG7oZpEAi4BlaTK5cUYwXuqeB3Twy9DrFTSj/4BeXNpZuj17xsqDDbHEj2FxseJQmv76VKZ26M55DW3HWTcc5Ep0oFlu6p3P6P/vO7JBJMukjndmEkB0/vRbmdtMRspGN3fZ7gEiN+7VkLLnm090c2dHKSzN9gouPqVy/GUCIA6u7zSFpuPRdp2riCJnDczoIn1aiXdG6PFZQORT0MZYOt79VM3Bufwgf6/8xw==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iS2lkcy1Gcm9udC1XaGl0ZS5qcGciO2ZpbGVuYW1lKj1VVEYtOCcnS2lkcy1Gcm9udC1XaGl0ZS5qcGc7&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=6fcc86ed0&linkoid=544230002&mode=100&sharelink_id=8356054170002&timestamp=1584222483158&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=bcbe0639e2c970ef8548801581be726bc34b72f2&cachekey=60:ad15e02d2c679036a218d161e2867687=============================",
          price: 1500
        },
        {
          invId: 2,
          name: "placeholder",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:a62e55cab8ffc32df68d809d75fc121c=============================/p/placeholder.jpg?allowdd=0&datakey=QmzGlaxblVNUcZefA/okg56ef0Zu88MIsGl8VAdE3ZNiYVngDVeESz6axW4FgsP0cmAkaprDb1kWhLKxiHZhb1oHUwwW3KLINRvZJp6V09wouEYWX+rXxeNvhuB0fNMU64a/isuar8wQwUhLsA6tX/EHGpHxRXIUdPxWIVS44kqlWEsGlvWqtukMKpDts3TqFZxIklhCklrgJM9OPwaiEyrdHbPJs2QAXSVuNJvkP3qrjBTOu1RHrhy1K03s9LyA8vvDb01HrqsTKgritgXFl4P5wnTqTl01uqIt6aKUIPGmibxKCtPSU2GN9xklNP1mqJ5/8kLX/xQLeKOe3rf5zA&engine=ln-3.1.31&errurl=WmnLq0BYQjpUgdc4vFol1a6ajbjTW6q0IvDZttUV9jXuDFWDh0zPz4VNjtTcG31BJlcVZENG1tNhjArLy8nkVIz4nagi0pII2dt9s8+XGqAbUj4FELKMSjAIrZlrtSe45DpbZUYt0JFN6D9s2yQSQ5yI+zN+S9kfF/dfvtsLkC94/4iW+hYhDW/eHKOXuqDnNdjTdaHyWPoN1YBBi6ziTVo/deFHuhAhvPivec61InKqrw0FEtqflNfMEodTXxNK7tnr5N1fLTc6O4P5nT5egtQolzweDuF1QXZiRkj5253pn6/UryELb6FFLxxZB9noXDFzsah56cdQjEfU14QVMA==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icGxhY2Vob2xkZXIuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ3BsYWNlaG9sZGVyLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=507e482c0&linkoid=544230002&mode=100&sharelink_id=8358466760002&timestamp=1584219812560&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=f4072a9b5703b5c0c927f02e19ec194c0acc4533&cachekey=60:a62e55cab8ffc32df68d809d75fc121c=============================",
          price: 999999
        },
        {
          invId: 3,
          name: "Placeholder",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:a62e55cab8ffc32df68d809d75fc121c=============================/p/placeholder.jpg?allowdd=0&datakey=QmzGlaxblVNUcZefA/okg56ef0Zu88MIsGl8VAdE3ZNiYVngDVeESz6axW4FgsP0cmAkaprDb1kWhLKxiHZhb1oHUwwW3KLINRvZJp6V09wouEYWX+rXxeNvhuB0fNMU64a/isuar8wQwUhLsA6tX/EHGpHxRXIUdPxWIVS44kqlWEsGlvWqtukMKpDts3TqFZxIklhCklrgJM9OPwaiEyrdHbPJs2QAXSVuNJvkP3qrjBTOu1RHrhy1K03s9LyA8vvDb01HrqsTKgritgXFl4P5wnTqTl01uqIt6aKUIPGmibxKCtPSU2GN9xklNP1mqJ5/8kLX/xQLeKOe3rf5zA&engine=ln-3.1.31&errurl=WmnLq0BYQjpUgdc4vFol1a6ajbjTW6q0IvDZttUV9jXuDFWDh0zPz4VNjtTcG31BJlcVZENG1tNhjArLy8nkVIz4nagi0pII2dt9s8+XGqAbUj4FELKMSjAIrZlrtSe45DpbZUYt0JFN6D9s2yQSQ5yI+zN+S9kfF/dfvtsLkC94/4iW+hYhDW/eHKOXuqDnNdjTdaHyWPoN1YBBi6ziTVo/deFHuhAhvPivec61InKqrw0FEtqflNfMEodTXxNK7tnr5N1fLTc6O4P5nT5egtQolzweDuF1QXZiRkj5253pn6/UryELb6FFLxxZB9noXDFzsah56cdQjEfU14QVMA==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icGxhY2Vob2xkZXIuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ3BsYWNlaG9sZGVyLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=507e482c0&linkoid=544230002&mode=100&sharelink_id=8358466760002&timestamp=1584219812560&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=f4072a9b5703b5c0c927f02e19ec194c0acc4533&cachekey=60:a62e55cab8ffc32df68d809d75fc121c=============================",
          price: 999999
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
#nav-store {
  background-color: #587886;
}
a#active-link {
  background-color: #04b0fc;
}
</style>
