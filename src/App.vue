<template>
  <div id="app" class="container my-5">
    <h1 class="text-center heading-1">Welcome To SquatchLand On-Line</h1>
    <h3 class="text-center heading-3 py-3">Adult Beanie/Skullcaps</h3>
    <div class="row">
      <div class="col-md-3 text-center" v-for="item in forSale" :key="item">
        <div class="card">
          <img :src="item.image" :alt="item.name" class="card-image-top" />
          <div class="card-body">
            <h4 class="card-title">{{ item.name }}</h4>
            <div class="card-text">{{ item.price / 100 }}.00</div>
            <div class="row justify-content-end">
              <button class="btn-block btn-danger">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      forSale: [
        {
          invId: 1,
          name: "Black Hat",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:64c0981fe67aecf678bd39de3b44188d=============================/p/Adult-Beane-Grey.jpg?allowdd=0&datakey=KA7F6UW6/hoaVNhk5fVnnnOyWyC8TmO9Np1z7fL0VkfjBtcrrW2AAt1vtYIG1K5wSEN6X11iEwMcyIod17pXZWz0PmAwEppJny5YgWs1bk66gvgC/hYluvor7YHVuEDfwKsNvhJ3Z1zOb2slxTq9uoxSPSW5TUxRlgH5moSbO01q/kJPIcg16D2L8vVD7JeO4Y+RKnjFB3kUrY7bMmlLnIEyIRx1e1hlmLWlDuYV34XR+u4tJDo9hOQZ/YsGpYS9xD1AF+aeaoFkiYvuih8QxMLbu86nzKHeGpv2YYj2oORc66b5/FLJ3uGBgFJ03NET+TObVFPdgYFHv0fsVIh8zw&engine=ln-3.1.31&errurl=Ym+XVm2zJhR9omlicxyYKG3LtAmM2dKuruwH6YrClBQbw9rwJ0/WMo9yZbDLUeGom5+xRfuCBaeLtNqmUU14lOyMUEdNxWvh2kN1PQfu803zYi8UPdC5xkk9QI9lGWYB7dbWWfqfJehuUfrSppYUmuTgki2NzcscVQZsBgegMeta6vTwIa1mMavv0fpPcR6vx3/2yQN5eCb4Mz8exYW9HMGNT2nHyx1vTl9TW/+O/xH53myFK5O+9TCTTsZTtO2zjIs4j87i699c7gwBoLaEJKK8EfDAOPiC+DXnJMmOsyXNMYsj8yBENwTfJg0QXCbqVFnUjOA5XjeWaJJwrHRihg==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQtQmVhbmUtR3JleS5qcGciO2ZpbGVuYW1lKj1VVEYtOCcnQWR1bHQtQmVhbmUtR3JleS5qcGc7&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=c045a1570&linkoid=544230002&mode=100&sharelink_id=8356027700002&timestamp=1583876267480&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=f85660cc5f07fee657614c5e09df56d14d5bb46e&cachekey=60:64c0981fe67aecf678bd39de3b44188d=============================",
          price: 2000
        },
        {
          invId: 2,
          name: "Blue Hat",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:6e31bfcfdd308ff02676c6e1b6b109af=============================/p/Adult-Beane-Blue.jpg?allowdd=0&datakey=jD2SDvTY6v6lJp62ESJsLP3JvVgq+sxbzxK5QxL5WAvmq/TdISZp1qArw5ZmI5MKmkjQv7bX6/gEVj6bUgzHeBKa1lfq6Gyse4pAcpR3jm0vYa4Ne5FjKfrJIRL8d8ioup5Qq2vjvUapmiBvO54gw9k6W7dum5X6tElXRMR69KK+Ha8K5e0h9qZIiLyCXnVragRt0+fWtHoQU8oSI9tnHAtTySxpxEqOvaxvO4aQFXXZGbGDFvYAq2PA9vUxByKLUh4ZFtOcChws1Nwjt4++zq4jJut+mDHvHCZRNS4ZHy2CDxLL1U+SUCi/SCC5+q/OD8500RR9HNYYdtph0GsbYw&engine=ln-3.1.31&errurl=TjjT2I3YJhzNYnUT73Qa/zF8orTcwbhKFwr99A5nyrKJbBMORcJLE63y+3KrZCHXJhm541nB/C9981PGx+t/XyggLsee8oiF1T/sQNxMPVdERJYTXEP1/gyuMaxltF5VnADxQol5lIvMKmAFMTdxkCs8VL33YhbhqK4+WnZHfWMITOijuwR0LPxDM4dVpKClp45+B+Qbv6OxV6D6pT3ipSH0/ZttA0JxWKAIvcH5uhwwUn7fuet9qo1A03pmOhQgVmdNQyZbaDSiiygYmx5Sp5vrs5Kj7x9+xCV832kxVmsteL6rD0NHAz5cdEeVi0okBhNs9bhzyYEhhvX+oLM7SQ==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQtQmVhbmUtQmx1ZS5qcGciO2ZpbGVuYW1lKj1VVEYtOCcnQWR1bHQtQmVhbmUtQmx1ZS5qcGc7&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=e827277f0&linkoid=544230002&mode=100&sharelink_id=8356027690002&timestamp=1583876226897&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=e5e422093ae6ab3642c27f073d21c55ccc8b111f&cachekey=60:6e31bfcfdd308ff02676c6e1b6b109af=============================",
          price: 2000
        },
        {
          invId: 3,
          name: "Blue Ball Cap",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:b9861a0def441854b9909e9d984e90da=============================/p/Adult-Hat-Blue.jpg?allowdd=0&datakey=aD1VJFWrrJg4B7vQR2wsbxG+dK1tvqo6c3hm1+vFuK2OCgMkbYlQgk8i65O+t0Kjklor+S5oDxuuC2VL3eb8ThvkkclF8y1xNUtzW4NmqvZ/UbisRDbNoRfx42nIeOhNbJseW/Ms0fRdnWARUbSgnGylhkUmUt5GfWnraTk8BC392eMKmxbyP92Cme1pqlSpFm8xtQ2LvgksFhyNQYAPfllbuM9K2TBvTkJ1MKTXQ3iIUkR6aNKR4FjjkwJAgayiyTqBne/6WeVkeDRKRLNaGHq7BEFqenulvZUXTSgl9v8gfXF2D51t3ERJ5qungR2mJNudRz+rzuAS5v4uE26csg&engine=ln-3.1.31&errurl=SA1i5b2TVyw9kenAp2Y2MPxOOcx/sujnom8Ota0IJ8IkkYkW40NRwPruhO2Pk23J9RgCZlImdrPFrQyVoTlrtb7V2aTmbvhe+afiwyBoY3wsQt4zhA/JbZZMPu9LFPAsF9qrZui0KMI0l+kH2mulbtiOqTiSdIdKwj8QgnQyt3bfM3I2c3WFkHNheT9FlNGA9p9/VRshr8azO4Tiexs+ZlUjLBRXDZSGghrs2I3KUY6fJAE/2+az2/aIgth5RGgDFDdfU338iIlcjI/lxBb0ynidKeALB1FnoswCQ8CBxWYLm0VccpfmAY8onRzyrjwSyL0sfRw/dD1qOVZcLhhHZg==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQtSGF0LUJsdWUuanBnIjtmaWxlbmFtZSo9VVRGLTgnJ0FkdWx0LUhhdC1CbHVlLmpwZzs&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=3942d5630&linkoid=544230002&mode=100&sharelink_id=8356027710002&timestamp=1583877409932&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=67d701fd41e51d2b0a8b344a76b88d269a6c2078&cachekey=60:b9861a0def441854b9909e9d984e90da=============================",
          price: 1500
        },
        {
          invId: 4,
          name: "Grey Skullcap",
          image:
            "https://secure17.syncusercontentpro.com/mfs-60:b01d6c4b012ee9351287a5300f5f9a03=============================/p/Adult-Grey-Skullcap.jpg?allowdd=0&datakey=bWL9mJIgp+TuqKSy5zTK979tqG/kNohDxHmbFpOcENRPtxcOWOey15VTw3icPQ1ivw8BAIcViMAns7FUalZncd4YzeU7gT24TdqLkAlmQ7zqutRCsKkm9ggimaMnwzU0DNzrzzNKyNDUxjNnDK5HgnsX4Y3lJyykIrkYkfpD1tFDuf9ZIsGLJeHKomY2wPb2e+Rl5bCVJF8qpWS5/QvmKYPT0AB8+viX8tUMNrrtXrsDBH96ylHMuupBtXALEzPNXGDoHtaFltDeUZaMvlE98F/JC/4qDIimttHiREG2u09vQ+NQ+4rBQF6/ohtG7CWlrjAWnKKIUZ/helTo4+UhCw&engine=ln-3.1.31&errurl=CNK97JlHYTLPSF4xveLVEQF9E6lI9uesfxPnMagIkqiQt5bqPy59vIFzSLBxFbLbWfrloioqXl9p9gQdBlsCUUg2PBRT8bzUp1DmH84CSfbw5v3W11WJizNmqJI8XvNbD7NEOqYwGUo9Eo2LrAZ8GXGtt2r/jmJJzD3rtFrsJ/xs9D/Ql8JC385QzFwwyoHoPiw7dso7gY0PbsTI5zopNG3fD5A6wQEuGWoaBqL9u1JNPVFEiBvOwOgeRqPfy8f0g3qVzCBOTpdqtXV8ErGPQ8pXxAzOfUT1IngQ/YCTbmHltFQpZOGDG7yxLRsuSwtzRqaan2JVNht+9bXgdAmkxg==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9qcGVn&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iQWR1bHQtR3JleS1Ta3VsbGNhcC5qcGciO2ZpbGVuYW1lKj1VVEYtOCcnQWR1bHQtR3JleS1Ta3VsbGNhcC5qcGc7&ipaddress=519ca1d8cc62eda7c1f3780a705ce710861ca01f&linkcachekey=8e5938190&linkoid=544230002&mode=100&sharelink_id=8356027740002&timestamp=1583876375242&uagent=a69db06b0c9198316d0e9b37b5efcf1d13a6269e&signature=167405fd60bce40a71c1777bd27b43aff12ad611&cachekey=60:b01d6c4b012ee9351287a5300f5f9a03=============================",
          price: 1500
        }
      ]
    };
  }
};
</script>
<style></style>
