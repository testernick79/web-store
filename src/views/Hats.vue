<template>
  <div id="Hats">
    <div class="card text-center py-5">
      <!--Start of NAV CARD
      create <storeNav />-->
      <h1 class="text-center heading-1 py-3">SquatchLand Store</h1>
      <div id="nav-store" class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <router-link id="active-link" to="/hats" class="nav-link">Hats</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/kids" class="nav-link">Kids</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/adults" class="nav-link">Adults</router-link>
          </li>
        </ul>
      </div>

      <!--End of NAV CARD-->

      <!--Start of Card Body-->
      <div class="card-body">
        <h3 class="text-center text-uppercase py-3">Adult Beanie & Skullcaps</h3>
        <p class="card-text lead">Don't see what your looking for? We also offer custome work too!</p>
        <div class="row">
          <div class="col-md-4 text-center py-3" v-for="item in hatsAdults" :key="item">
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
    </div>
    <!--Start of CARD Body-->
  </div>
</template>

<script>
export default {
  name: "Hats",
  data() {
    return {
      hatsAdults: [
        {
          invId: 1,
          name: "Black Hat",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:e14a07e3e4802e46e5bbf06e8445f953=============================/p/Adult-Beane-Grey.jpg?allowdd=0&datakey=IMn93CndTg7mS8xl5rXbIMXAlJnmmS8IWoiSg4Yc+pO2gyFDu0jA7iN2QJzkfkpt//xJp83f/PPGz/smFS+X67QFbz2LErkK5MF7QdtMbFjJXwCRpCok1WNjJSXTVdVqy8LqC1XlKo0m8QpBlqPas0vt7jw5IDUOnjDM4AYBbKMi5lq8dXkZgX26he1h9di0goeV2MYMlVfulhvTHqP5XlSO0ThnihUkjX41XzBT3Xjf/tZIgMT2mi45jTdoOLjd5DgDKb1Ec6GA3P782lPQGe38QdBHwgc2+5XOZl4gOfCFT/VJFhC2OtIY5lyEx8aciYY+C6UeKLXhV+Kjf7+wSQ&engine=ln-3.1.31&errurl=cfE24lBcevNxx8l4aMfa3jH/C5ppNFEI0HmfupNoSSl4bbK2Itvh1+Ivm2XAu54YreZZePKcuIUJPYGJea2jBHaZGoVokgQ2mNOpjQpMvH1JoVVH871c891H3/tzP9yAe/Eksxk0T8RIvuutiVAQE8dhUbAJyMip1+L8jZnWu9zO6q0OQ1BeIZH8ZhAZPvRWi0IxvA4c8BnAba8aoZpnj34aqJ5P6VZ7q9+auJ8r5muokj7Gnl+TzsNSyy/VSAmqWUvQ49ZhGzgfyBWOzcj26JjoIcttxyINqivqIGrSbZPWa28Mxb0mMqYwGYTHt0KEqZsQbMppzSKEEL8+KFNkrA==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQtQmVhbmUtR3JleS5qcGciO2ZpbGVuYW1lKj1VVEYtOCcnQWR1bHQtQmVhbmUtR3JleS5qcGc7&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=c045a1570&linkoid=544230002&mode=100&sharelink_id=8356027700002&timestamp=1584225647172&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=97b789a9152541dfc64c33fe261826fe0e3efd3f&cachekey=60:e14a07e3e4802e46e5bbf06e8445f953=============================",
          price: 2000
        },
        {
          invId: 2,
          name: "Blue Hat",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:1664d7962893be3e6fedecfae20053f6=============================/p/Adult-Beane-Blue.jpg?allowdd=0&datakey=V7XjiDnVw4aN2Qk95rVynxHrviXOZqI7TvxwycAGBrF3GtVGcIH6j+Q72VS77FBmnf+5Ft2m2tKDV54+YQ3lrMtXJq0qVAEEvQo7+b5tR7Uo/3NRTSh7xJYrTF7VN1LgFNA5u5emVzR/492KB/yXej2glVDXV9EM02MEE0aea/unM+J3jGJgyvpXJ72NT/8SIFVUj5mT/wJAuJzt6cxWFrGuoRNhiJg2viPS3TzHq1ckeEa6cAAhxwOyumyZZLoxglOJS8hl2XF0VFxFTHVZRC7HfV0PBTfnNadtt9j6NQUtRRBvu5097vuF8+e6BwDwUNUmIj+N+XSrCGaWK4UvyA&engine=ln-3.1.31&errurl=ZklUmRo2ZcmFjw1HjDTRkRn996pRNJ9/PXICOtdyLr52xh8XtGET/rhBpmZeWTfUeSfGcPcGoT1d1ACQ1iK7COZS/FEl5RfsooNEk3pMsJaI+84uZSkrMkLbQ/U+cz5/ae5ww0wCbNu2ym7HwP6P6CCI0v5MlxjLqUn7lW9UsSl/hPkFVg3RMdKbtLN5ZhmSf8IWWhVxu5KaKpceI4dAIXZ+CUDtChqlZfNq/of0X/1Mhkfo7yt3zle08OVtPm6I5POSQ2dpI3xbAgz1tXRH+JdNFu1mNiejm14yABWSjcnc2plZ0XmXRlWgP6t3l/HExmO2ir+wULZUEK38DNdEmw==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQtQmVhbmUtQmx1ZS5qcGciO2ZpbGVuYW1lKj1VVEYtOCcnQWR1bHQtQmVhbmUtQmx1ZS5qcGc7&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=e827277f0&linkoid=544230002&mode=100&sharelink_id=8356027690002&timestamp=1584225847637&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=9a455c1e97097c4fdfc3b8f3db1fc6d0d90b0f31&cachekey=60:1664d7962893be3e6fedecfae20053f6=============================",
          price: 2000
        },
        {
          invId: 3,
          name: "Blue Ball Cap",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:6f7cec6af7be16618c0f5068054a9ec5=============================/p/IMG_20191207_143339~2.jpg?allowdd=0&datakey=mFC0QXWKFvMoatiEowKDL22XdfyRkwOgUR5gnwitbA1JO6zwF6KhgAXv/n4slTkz0Ia2q2GJ0Q/MiRsuaqlWQOvixmHe2WNZ1T0uNNEd8ankQ3qz7jpGErVafO222pmzZ8aRD9HFzC74sEPHMSpprkWJEUqe/drgG4N5J68OmgMq7EVCGWPS+neOchPCeY6dMkP1viU6uQLb2uTQoCXTKKSfokcvHDU2JBTmqMe3Plc9FrkiyHEuiEou8l4gKZVOfsp/53+G7cS6dNj54DHvkcyEv9vAVYKh6o7rgGdell/LgKMdSsJaBi/KkVpOjZK7I7Z78mXfMMjzyHavwAL9NA&engine=ln-3.1.31&errurl=hBZBn+oMJW6oRxAyIxY20hl9RIZzqPSMsWoTJFYmB6EMVzpUiqt6aQ3UzcT9MM1mwxpw7ozcZgVlIzzWM5lnhOF9uNtxO8NmRhgczDI/KO2e0xIDhWEcDFmrMD8qFbjt10wFc0wMsGrpvZrXtr/95lpPUHafno3awYsIP0rB1NtP7hOCN0QBmsjyefv1D3B6Be0yHeNHYOfCxJrwDtRwTy+Kzj5OIiK+rUim8bnqs6Ex8AkYLEK7gYrMr/VCxl6GnQ6+bDadm1+MBtrdF+gNnZBP8YmR0dApgbBG0aDuTE8sf7cp+knAPEfjxTxx3+TTqrf41JmhNK9WjMCyRNmqeg==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iSU1HXzIwMTkxMjA3XzE0MzMzOX4yLmpwZyI7ZmlsZW5hbWUqPVVURi04JydJTUdfMjAxOTEyMDdfMTQzMzM5fjIuanBnOw&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=74c6c8790&linkoid=544230002&mode=100&sharelink_id=8356964430002&timestamp=1584225726894&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=01cc693af350c7c48ce6f8a1fb67c412ce33b005&cachekey=60:6f7cec6af7be16618c0f5068054a9ec5=============================",
          price: 1500
        },
        {
          invId: 4,
          name: "Grey Skullcap",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:fd294b6f471167e2049ca19d39a2b2b2=============================/p/Adult-Grey-Skullcap.jpg?allowdd=0&datakey=K1tLfCwiKJ18oUSIJDDnpNrBpHUZUq5V4lyNAvAKrIYGYTD1c1wecp4AYT2QUWNfc46UbaUHm63nRwkvcVwMFzRuqH09TLQO6fgQATIzKvNorswQHFe4onSpAJzBlypYpiOsPXfjfMRd26iruPlHN8QdFsF+jqJ+Qfe9gp1weY07bJ/DbXaEFf2o/aCBQ/GfkTQIm8fIs60+vULjo3PR/8ejlXhuc1N2DlhjfH3YZEQMyW7zmK4pahFakpNfDbW2wRQbrMqs1dL2fboiyn/OYKXqw6bwrIsa48uDwPXcPViXGIvPi/I5AYjoU8THUN4pDKZQswgb08GrDxsUYagZZg&engine=ln-3.1.31&errurl=lW1x2Nnx5FylJiXIMEKVXG23rJPWAaUIEdv1Rzn5xXuYdyZEaIOgjSMNzKmIZETbmyqr040Hjh8e+Hbw8cgIDILZbBLMfPCn/6ehc4xK5CQYmFfYouagw8BGvKjPqlfq+avw97+BndH3bfXGipj1IA01R4cPjQKLXx8Fq/2lFNowCmbPGK2uLIbxa/dV8lu4P3DHYq4jac1UOJO7kbyhFFLIvHgKoqaZDK7Wf+ryQLFBrdz327IzkaYDqsO/BQ4flKizXnQ/BNnZn/81qh0A1x8mkSXOvJHNmHz9gA1qcrKdKySYyagQaB8He4THdQ8UFCEL8ISfrr4NygBmeRMp6Q==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQtR3JleS1Ta3VsbGNhcC5qcGciO2ZpbGVuYW1lKj1VVEYtOCcnQWR1bHQtR3JleS1Ta3VsbGNhcC5qcGc7&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=8e5938190&linkoid=544230002&mode=100&sharelink_id=8356027740002&timestamp=1584225906921&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=ec3bdd119238c0d32493c6aecf264f71b29aa8d8&cachekey=60:fd294b6f471167e2049ca19d39a2b2b2=============================",
          price: 1500
        },
        {
          invId: 5,
          name: "Black Skullcap",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:0907b0afeddffb966e6bb1d692a715c9=============================/p/Dark%20grey%20beanie.jpg?allowdd=0&datakey=V60LhzhO7F/ogCD608ezWOWHxMggGDHCyVBePf6Vqut1MuX9pJYucyN5p0hpkWOUSCF3wwLdBlIiLj/CX3Ya5fY/xZB7bgw3/rj+hl9CfGHE0RFmi4+Q/bYEM9nP/LYJR1M6XiY7UZAaWB3DH7KbGAHBX1Kvbj9lSj1tRqo2kgE/R/Cgsf0eDA4cEyxEJmQSj3WeCne9+hmmk61teVSjt/8FtFbJlv5pu9n3xcGZUExTpGCKSd1hXP+kNYvs5HKdYIN8WHulqLTE4LHw74uGGs9L+d+6OQbPH5yF3il4uSFSHkqhPYGmjEUq5wCEVA7m1qLngfT0o11bPxOi0603yw&engine=ln-3.1.31&errurl=nkz4lcQm4Uy/NgI4leEMqIyCJT01hpajXdHhtMeJaAxammWkTNU+uhVAT5gVMYx8Ntn9XkKBsGLWwTJ2lzJ3VnBOZz4KnwfqXXNLTz4NaaerkS7tBinD1XgMcbfP4qhwuq9Xqb87W9nmo5FlLK/vihzZ33JjG7nU1XFVm6If48cxAb78Rp9cyJnDfqLzyIthAfAzKa6g6zxMKiFxdClGJsgsYkm/I3yatDPMm3DgsLy6iuATdj9CNuKB7WMTBJZIq5PkjDeI0Pc7/L0YUqEaXEEXb1K7HU5bM/05jqkejWZu9GorI5rmX3eHT+cU8axDDIr3CHysdmDflqzCsOxaAg==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iRGFyayUyMGdyZXklMjBiZWFuaWUuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ0RhcmslMjBncmV5JTIwYmVhbmllLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=585484370&linkoid=544230002&mode=100&sharelink_id=8356051880002&timestamp=1584225980649&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=a01766a18df46f7afb940955b4040cb0c06e34cd&cachekey=60:0907b0afeddffb966e6bb1d692a715c9=============================",
          price: 1500
        },
        {
          invId: 6,
          name: "Placeholder",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:a62e55cab8ffc32df68d809d75fc121c=============================/p/placeholder.jpg?allowdd=0&datakey=QmzGlaxblVNUcZefA/okg56ef0Zu88MIsGl8VAdE3ZNiYVngDVeESz6axW4FgsP0cmAkaprDb1kWhLKxiHZhb1oHUwwW3KLINRvZJp6V09wouEYWX+rXxeNvhuB0fNMU64a/isuar8wQwUhLsA6tX/EHGpHxRXIUdPxWIVS44kqlWEsGlvWqtukMKpDts3TqFZxIklhCklrgJM9OPwaiEyrdHbPJs2QAXSVuNJvkP3qrjBTOu1RHrhy1K03s9LyA8vvDb01HrqsTKgritgXFl4P5wnTqTl01uqIt6aKUIPGmibxKCtPSU2GN9xklNP1mqJ5/8kLX/xQLeKOe3rf5zA&engine=ln-3.1.31&errurl=WmnLq0BYQjpUgdc4vFol1a6ajbjTW6q0IvDZttUV9jXuDFWDh0zPz4VNjtTcG31BJlcVZENG1tNhjArLy8nkVIz4nagi0pII2dt9s8+XGqAbUj4FELKMSjAIrZlrtSe45DpbZUYt0JFN6D9s2yQSQ5yI+zN+S9kfF/dfvtsLkC94/4iW+hYhDW/eHKOXuqDnNdjTdaHyWPoN1YBBi6ziTVo/deFHuhAhvPivec61InKqrw0FEtqflNfMEodTXxNK7tnr5N1fLTc6O4P5nT5egtQolzweDuF1QXZiRkj5253pn6/UryELb6FFLxxZB9noXDFzsah56cdQjEfU14QVMA==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icGxhY2Vob2xkZXIuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ3BsYWNlaG9sZGVyLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=507e482c0&linkoid=544230002&mode=100&sharelink_id=8358466760002&timestamp=1584219812560&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=f4072a9b5703b5c0c927f02e19ec194c0acc4533&cachekey=60:a62e55cab8ffc32df68d809d75fc121c=============================",
          price: 999999
        },
        {
          invId: 7,
          name: "Placeholder",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:a62e55cab8ffc32df68d809d75fc121c=============================/p/placeholder.jpg?allowdd=0&datakey=QmzGlaxblVNUcZefA/okg56ef0Zu88MIsGl8VAdE3ZNiYVngDVeESz6axW4FgsP0cmAkaprDb1kWhLKxiHZhb1oHUwwW3KLINRvZJp6V09wouEYWX+rXxeNvhuB0fNMU64a/isuar8wQwUhLsA6tX/EHGpHxRXIUdPxWIVS44kqlWEsGlvWqtukMKpDts3TqFZxIklhCklrgJM9OPwaiEyrdHbPJs2QAXSVuNJvkP3qrjBTOu1RHrhy1K03s9LyA8vvDb01HrqsTKgritgXFl4P5wnTqTl01uqIt6aKUIPGmibxKCtPSU2GN9xklNP1mqJ5/8kLX/xQLeKOe3rf5zA&engine=ln-3.1.31&errurl=WmnLq0BYQjpUgdc4vFol1a6ajbjTW6q0IvDZttUV9jXuDFWDh0zPz4VNjtTcG31BJlcVZENG1tNhjArLy8nkVIz4nagi0pII2dt9s8+XGqAbUj4FELKMSjAIrZlrtSe45DpbZUYt0JFN6D9s2yQSQ5yI+zN+S9kfF/dfvtsLkC94/4iW+hYhDW/eHKOXuqDnNdjTdaHyWPoN1YBBi6ziTVo/deFHuhAhvPivec61InKqrw0FEtqflNfMEodTXxNK7tnr5N1fLTc6O4P5nT5egtQolzweDuF1QXZiRkj5253pn6/UryELb6FFLxxZB9noXDFzsah56cdQjEfU14QVMA==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icGxhY2Vob2xkZXIuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ3BsYWNlaG9sZGVyLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=507e482c0&linkoid=544230002&mode=100&sharelink_id=8358466760002&timestamp=1584219812560&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=f4072a9b5703b5c0c927f02e19ec194c0acc4533&cachekey=60:a62e55cab8ffc32df68d809d75fc121c=============================",
          price: 999999
        },
        {
          invId: 8,
          name: "Placeholder",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:a62e55cab8ffc32df68d809d75fc121c=============================/p/placeholder.jpg?allowdd=0&datakey=QmzGlaxblVNUcZefA/okg56ef0Zu88MIsGl8VAdE3ZNiYVngDVeESz6axW4FgsP0cmAkaprDb1kWhLKxiHZhb1oHUwwW3KLINRvZJp6V09wouEYWX+rXxeNvhuB0fNMU64a/isuar8wQwUhLsA6tX/EHGpHxRXIUdPxWIVS44kqlWEsGlvWqtukMKpDts3TqFZxIklhCklrgJM9OPwaiEyrdHbPJs2QAXSVuNJvkP3qrjBTOu1RHrhy1K03s9LyA8vvDb01HrqsTKgritgXFl4P5wnTqTl01uqIt6aKUIPGmibxKCtPSU2GN9xklNP1mqJ5/8kLX/xQLeKOe3rf5zA&engine=ln-3.1.31&errurl=WmnLq0BYQjpUgdc4vFol1a6ajbjTW6q0IvDZttUV9jXuDFWDh0zPz4VNjtTcG31BJlcVZENG1tNhjArLy8nkVIz4nagi0pII2dt9s8+XGqAbUj4FELKMSjAIrZlrtSe45DpbZUYt0JFN6D9s2yQSQ5yI+zN+S9kfF/dfvtsLkC94/4iW+hYhDW/eHKOXuqDnNdjTdaHyWPoN1YBBi6ziTVo/deFHuhAhvPivec61InKqrw0FEtqflNfMEodTXxNK7tnr5N1fLTc6O4P5nT5egtQolzweDuF1QXZiRkj5253pn6/UryELb6FFLxxZB9noXDFzsah56cdQjEfU14QVMA==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icGxhY2Vob2xkZXIuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ3BsYWNlaG9sZGVyLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=507e482c0&linkoid=544230002&mode=100&sharelink_id=8358466760002&timestamp=1584219812560&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=f4072a9b5703b5c0c927f02e19ec194c0acc4533&cachekey=60:a62e55cab8ffc32df68d809d75fc121c=============================",
          price: 999999
        },
        {
          invId: 8,
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
#active-link {
  background-color: #04b0fc;
}
</style>
