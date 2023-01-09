// 找出json中value重复的部分
let activity = [
    {
        "index": 19344,
        "eventType": "list",
        "item": "6pm5b-qykor-uwiaa-aaaaa-byalt-eaqca-aaaa2-q",
        "from": "abfq3-zy7i3-43ahk-no53o-ye5qi-uhuk7-dodw3-wbebt-od4ji-gvmda-zqe",
        "to": "",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 200000000,
        "date": "1659660244304003016"
    },
    {
        "index": 19286,
        "eventType": "list",
        "item": "k3jwl-kakor-uwiaa-aaaaa-byalt-eaqca-aaaaj-a",
        "from": "nv57l-7poum-aeu6y-go66z-yqupw-mfiuq-h5ltq-qs7yc-623on-ddv7g-dae",
        "to": "",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 5000000000,
        "date": "1659626509267511339"
    },
    {
        "index": 19273,
        "eventType": "list",
        "item": "2jwsi-5qkor-uwiaa-aaaaa-byalt-eaqca-aaaaa-q",
        "from": "oyswp-5fv5e-fzkb3-jahhb-kx26q-xfnvp-kkon7-z5lft-ro634-cdu5w-pqe",
        "to": "",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 5000000000,
        "date": "1659625745667961238"
    },
    {
        "index": 19270,
        "eventType": "list",
        "item": "wydiz-nqkor-uwiaa-aaaaa-byalt-eaqca-aaaam-a",
        "from": "cjjn2-42jvz-hfqob-ly6mm-fi4c5-docyz-eygon-aun6t-5av5h-gl6mh-fae",
        "to": "",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 1900000000,
        "date": "1659625647539065949"
    },
    {
        "index": 19266,
        "eventType": "list",
        "item": "f3kky-cqkor-uwiaa-aaaaa-byalt-eaqca-aaabn-a",
        "from": "giwfk-5v3ia-7cia5-2wfym-3bxks-h7rck-v7gb5-chelc-bg2jr-h3rlt-mae",
        "to": "",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 2500000000,
        "date": "1659625466118503223"
    },
    {
        "index": 19264,
        "eventType": "list",
        "item": "hmhic-qykor-uwiaa-aaaaa-byalt-eaqca-aaaad-q",
        "from": "m5krp-obnf3-5vv6u-k2oj2-lakkq-jqm4k-ufhpk-675nk-5b7b2-rlhqd-oqe",
        "to": "",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 500000000,
        "date": "1659625330843035304"
    },
    {
        "index": 19258,
        "eventType": "list",
        "item": "wcydt-kikor-uwiaa-aaaaa-byalt-eaqca-aaabo-q",
        "from": "w2bch-zahh2-lxazx-3syhs-m3qfw-d3e5x-wfet4-jajvh-laigf-deamz-dqe",
        "to": "",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 9000000000,
        "date": "1659625308031511419"
    },
    {
        "index": 19255,
        "eventType": "list",
        "item": "upokd-7ykor-uwiaa-aaaaa-byalt-eaqca-aaabc-q",
        "from": "3fwl3-wd2fw-l2hog-fwwjb-ksmek-whoj3-htzoc-6dpwu-5hasb-k2lwz-6qe",
        "to": "",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 10000000000,
        "date": "1659625265060693470"
    },
    {
        "index": 19254,
        "eventType": "claim",
        "item": "xzv3d-gykor-uwiaa-aaaaa-byalt-eaqca-aaabk-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "wp4ak-lomvw-qorxu-3yivd-tyer4-4cm2k-rfj3p-sagef-a2ohu-dv4pi-3ae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625258568693545"
    },
    {
        "index": 19253,
        "eventType": "claim",
        "item": "f4h52-dakor-uwiaa-aaaaa-byalt-eaqca-aaaan-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "qerfr-buids-5pmjp-gduti-wjpew-efsy5-2q3aq-354i6-zxh4l-wvxv4-dae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625255810563023"
    },
    {
        "index": 19252,
        "eventType": "claim",
        "item": "b25st-oikor-uwiaa-aaaaa-byalt-eaqca-aaaax-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "4pedb-tvuxd-cudjt-ndyfh-25q56-3yunj-6ttp5-t7gz7-6o7mj-c3xbr-wae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625255810563023"
    },
    {
        "index": 19251,
        "eventType": "claim",
        "item": "qozsi-takor-uwiaa-aaaaa-byalt-eaqca-aaaay-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "oec4x-uhxgr-xodar-lxh2b-ufukd-nuata-dusnc-dooat-4nrlq-2jnoj-oae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625255007218030"
    },
    {
        "index": 19250,
        "eventType": "claim",
        "item": "3iabs-wykor-uwiaa-aaaaa-byalt-eaqca-aaabg-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ud2bp-ijogk-nnffv-4ogfm-gicep-7d6if-2s2pq-lzn4h-dgc63-ho3ts-sqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625250275902866"
    },
    {
        "index": 19249,
        "eventType": "claim",
        "item": "nw6uk-yakor-uwiaa-aaaaa-byalt-eaqca-aaaaz-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "cefkm-cts67-cendn-mipz6-gfidx-gxtdy-xgqt2-gckh5-p7tw6-bqabf-mqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625249531128387"
    },
    {
        "index": 19248,
        "eventType": "claim",
        "item": "a4gwl-eqkor-uwiaa-aaaaa-byalt-eaqca-aaaar-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "je3ya-ul6i3-4rfkq-nwpcr-2jpzt-bm5k4-lwzyq-moqkl-ho236-yzeb7-aae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625247667784810"
    },
    {
        "index": 19247,
        "eventType": "claim",
        "item": "k3jwl-kakor-uwiaa-aaaaa-byalt-eaqca-aaaaj-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "nv57l-7poum-aeu6y-go66z-yqupw-mfiuq-h5ltq-qs7yc-623on-ddv7g-dae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625241129898238"
    },
    {
        "index": 19246,
        "eventType": "claim",
        "item": "yzwhq-oikor-uwiaa-aaaaa-byalt-eaqca-aaaao-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ovybj-apfuv-flz43-3mbj7-ea4hs-2bhf2-lpknk-uvqw6-oyvh4-ukgfx-jqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625233849034328"
    },
    {
        "index": 19245,
        "eventType": "claim",
        "item": "voyzz-uqkor-uwiaa-aaaaa-byalt-eaqca-aaaae-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "exmpb-6k7uq-gbqpc-43wus-lbizw-an5ao-regx2-mfb7f-2xqbh-gapwu-mqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625232928305107"
    },
    {
        "index": 19244,
        "eventType": "claim",
        "item": "2tnzc-2ikor-uwiaa-aaaaa-byalt-eaqca-aaabc-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "mbwaa-ktk5r-ug4zq-bnsub-atbwc-w2csp-542e5-wh2tt-s7mld-6m4qf-bae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625232928305107"
    },
    {
        "index": 19243,
        "eventType": "claim",
        "item": "3s3ky-rakor-uwiaa-aaaaa-byalt-eaqca-aaaae-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "qhmdp-4isae-3jmmv-4apgg-veayw-37q4r-izxvg-f2mqw-74jd7-gijc3-eae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625232928305107"
    },
    {
        "index": 19242,
        "eventType": "claim",
        "item": "7ubfr-4ikor-uwiaa-aaaaa-byalt-eaqca-aaaa6-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "i2tnw-uv66n-4s3th-3yea2-bxanc-7wdzb-eovzy-3sekc-ninfb-sajlt-aqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625232928305107"
    },
    {
        "index": 19241,
        "eventType": "claim",
        "item": "yea3y-iakor-uwiaa-aaaaa-byalt-eaqca-aaaam-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ex77h-rdvdx-gvc2h-aqdqq-ofvvy-oxlsr-zwfxo-55ike-po4ow-6wbgy-nae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625232928305107"
    },
    {
        "index": 19240,
        "eventType": "claim",
        "item": "6pm5b-qykor-uwiaa-aaaaa-byalt-eaqca-aaaa2-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "abfq3-zy7i3-43ahk-no53o-ye5qi-uhuk7-dodw3-wbebt-od4ji-gvmda-zqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625231300794698"
    },
    {
        "index": 19239,
        "eventType": "claim",
        "item": "ehkfk-pqkor-uwiaa-aaaaa-byalt-eaqca-aaaaj-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "6xvn7-3i7dd-tfg3j-in22q-ebwoc-quu4y-kqhhs-cgubk-3yjoz-76xhb-kae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625230250844382"
    },
    {
        "index": 19238,
        "eventType": "claim",
        "item": "vtofr-sykor-uwiaa-aaaaa-byalt-eaqca-aaaag-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "k37cf-waoch-rze7z-bwp34-quhcj-u2r6p-6wksh-g3gkx-cypss-nbv6j-qqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625230250844382"
    },
    {
        "index": 19237,
        "eventType": "claim",
        "item": "gnr3y-3qkor-uwiaa-aaaaa-byalt-eaqca-aaabf-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "oxdcf-xnqbr-hu3ij-3odrx-uri32-2gjxq-snh22-a6u5s-mzh5p-oeyed-xae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625229597248326"
    },
    {
        "index": 19236,
        "eventType": "claim",
        "item": "oaffk-bakor-uwiaa-aaaaa-byalt-eaqca-aaaar-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "gvq52-j3jdw-vpo66-wh34r-wdt4y-chib2-44xrk-qufx2-7jusv-s6xef-2qe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625228493330830"
    },
    {
        "index": 19235,
        "eventType": "claim",
        "item": "usywl-zqkor-uwiaa-aaaaa-byalt-eaqca-aaaba-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "a3ulp-44jvi-kw4va-txbux-4htaz-iouj2-2kbk7-xe2fb-wkq5a-kk5p5-pqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625226564711716"
    },
    {
        "index": 19234,
        "eventType": "claim",
        "item": "hmhic-qykor-uwiaa-aaaaa-byalt-eaqca-aaaad-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "m5krp-obnf3-5vv6u-k2oj2-lakkq-jqm4k-ufhpk-675nk-5b7b2-rlhqd-oqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625226564711716"
    },
    {
        "index": 19233,
        "eventType": "claim",
        "item": "hlk7a-rikor-uwiaa-aaaaa-byalt-eaqca-aaabd-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "2y3jf-2vzlm-zdly4-k6gyp-stzq6-7ynib-klghs-rxsjn-vsjmb-hy6ss-oqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625225811736818"
    },
    {
        "index": 19232,
        "eventType": "claim",
        "item": "upokd-7ykor-uwiaa-aaaaa-byalt-eaqca-aaabc-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "3fwl3-wd2fw-l2hog-fwwjb-ksmek-whoj3-htzoc-6dpwu-5hasb-k2lwz-6qe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625223994903164"
    },
    {
        "index": 19231,
        "eventType": "claim",
        "item": "crq73-rakor-uwiaa-aaaaa-byalt-eaqca-aaaa5-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "6fb6j-3dntz-hiwpn-oy757-u3qkk-jmfbw-kgnws-q5yn5-6rhei-dwrrz-sqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625223092296908"
    },
    {
        "index": 19230,
        "eventType": "claim",
        "item": "a3lbj-fakor-uwiaa-aaaaa-byalt-eaqca-aaabr-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ygpk3-hfzga-nu333-abfyz-rqnrs-w42bz-zmn7o-h34yv-2iuhx-ppgi3-vqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625222230816254"
    },
    {
        "index": 19229,
        "eventType": "claim",
        "item": "gxkqs-4ikor-uwiaa-aaaaa-byalt-eaqca-aaaah-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "asvrx-svv55-yoaka-zhei7-vaw7s-n4vjk-ou6dw-dihhb-qhrp5-p5zg7-dqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625221272251442"
    },
    {
        "index": 19228,
        "eventType": "claim",
        "item": "2jwsi-5qkor-uwiaa-aaaaa-byalt-eaqca-aaaaa-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "oyswp-5fv5e-fzkb3-jahhb-kx26q-xfnvp-kkon7-z5lft-ro634-cdu5w-pqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625221272251442"
    },
    {
        "index": 19227,
        "eventType": "claim",
        "item": "gk4m2-2akor-uwiaa-aaaaa-byalt-eaqca-aaaaf-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "7grgj-jfzfl-peus5-i4ipz-bhn7n-qaonc-6rxet-vkzzz-d4bgn-t6slc-sae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625220243926958"
    },
    {
        "index": 19226,
        "eventType": "claim",
        "item": "abqkd-cykor-uwiaa-aaaaa-byalt-eaqca-aaaat-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "7l4hw-qy44n-uv3da-vbf4w-4m3wg-e54qa-7mlll-wp3ka-6uj26-pdxhu-jae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625220243926958"
    },
    {
        "index": 19225,
        "eventType": "claim",
        "item": "hw4di-xakor-uwiaa-aaaaa-byalt-eaqca-aaabb-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "mel2d-ueqoo-m7av5-iqobh-6bunm-7rc75-f4rws-g2xav-oool7-i66je-aae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625219218102199"
    },
    {
        "index": 19224,
        "eventType": "claim",
        "item": "qtpoa-vikor-uwiaa-aaaaa-byalt-eaqca-aaaa2-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "r25wj-2ig4d-6l2ra-ipbtn-7s2mx-lcwfw-lapxi-eicoj-dxmmz-4eidh-mqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625218455206037"
    },
    {
        "index": 19223,
        "eventType": "claim",
        "item": "x6ymb-hikor-uwiaa-aaaaa-byalt-eaqca-aaaak-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "v4atu-soq75-faskc-w22cd-vlj5r-x47cs-f3srt-gyuct-3j4l6-ssfps-fae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625216556057418"
    },
    {
        "index": 19222,
        "eventType": "claim",
        "item": "dk5hl-5qkor-uwiaa-aaaaa-byalt-eaqca-aaaaz-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ajzli-tp2be-62sj5-47kcl-sozzm-yi7wl-otlem-aecez-7bd2a-gizwi-xqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625215562122642"
    },
    {
        "index": 19221,
        "eventType": "claim",
        "item": "wydiz-nqkor-uwiaa-aaaaa-byalt-eaqca-aaaam-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "cjjn2-42jvz-hfqob-ly6mm-fi4c5-docyz-eygon-aun6t-5av5h-gl6mh-fae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625215562122642"
    },
    {
        "index": 19220,
        "eventType": "claim",
        "item": "fg4wq-eykor-uwiaa-aaaaa-byalt-eaqca-aaabp-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ckd7a-wpccz-r2gpp-c5535-qr3bo-6b4xm-sresl-sb62o-muf77-dgqrj-7qe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625215562122642"
    },
    {
        "index": 19219,
        "eventType": "claim",
        "item": "zfwic-dikor-uwiaa-aaaaa-byalt-eaqca-aaabk-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "mtuv6-csmvz-onz46-bkey2-avsum-qjbc5-vjw5t-2ilul-5lwor-4o5xg-3qe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625213662606016"
    },
    {
        "index": 19218,
        "eventType": "claim",
        "item": "jqe3d-vikor-uwiaa-aaaaa-byalt-eaqca-aaaad-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "qs2ga-53bsi-dsspl-oiw63-uxbin-nmtuq-57ty2-paco5-vme6r-q5pb2-7ae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625211875464549"
    },
    {
        "index": 19217,
        "eventType": "claim",
        "item": "pg6bs-lykor-uwiaa-aaaaa-byalt-eaqca-aaaax-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "exqgd-4nu6j-ldusr-tcsqo-ylihg-v6eui-gbu3n-5xzhe-hnxql-hkfjj-6ae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625210867600049"
    },
    {
        "index": 19216,
        "eventType": "claim",
        "item": "f3kky-cqkor-uwiaa-aaaaa-byalt-eaqca-aaabn-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "giwfk-5v3ia-7cia5-2wfym-3bxks-h7rck-v7gb5-chelc-bg2jr-h3rlt-mae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625210867600049"
    },
    {
        "index": 19215,
        "eventType": "claim",
        "item": "ydnm2-jqkor-uwiaa-aaaaa-byalt-eaqca-aaabm-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "oiwck-p7w6m-75qlb-ijceh-vdgmi-whark-5ault-yhtle-injej-bimub-wqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625210867600049"
    },
    {
        "index": 19214,
        "eventType": "claim",
        "item": "tycdi-kakor-uwiaa-aaaaa-byalt-eaqca-aaaaq-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "wpruo-ilpoo-bcvws-f6qlj-htdpu-jd7ii-k4wxp-bqy72-46zgf-vkc3q-cae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625209150249687"
    },
    {
        "index": 19213,
        "eventType": "claim",
        "item": "wcydt-kikor-uwiaa-aaaaa-byalt-eaqca-aaabo-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "w2bch-zahh2-lxazx-3syhs-m3qfw-d3e5x-wfet4-jajvh-laigf-deamz-dqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625209150249687"
    },
    {
        "index": 19212,
        "eventType": "claim",
        "item": "o5tzc-hikor-uwiaa-aaaaa-byalt-eaqca-aaaat-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "kam2l-2a5e4-qdeab-4e2pi-vt7q3-sj6oo-yfsvf-fcj2w-o3kjj-7fz4v-pqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625209150249687"
    },
    {
        "index": 19211,
        "eventType": "claim",
        "item": "e5roa-iikor-uwiaa-aaaaa-byalt-eaqca-aaabl-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "eafve-g5mln-qb2fz-vb3xj-w5gw4-tngdp-swpfj-iyezj-echbz-7ubst-6qe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625209150249687"
    },
    {
        "index": 19210,
        "eventType": "claim",
        "item": "rvuky-7qkor-uwiaa-aaaaa-byalt-eaqca-aaaa4-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "e543u-vebwi-7nwq2-gnwq2-mphee-nauk7-r4nlk-afjzb-p7yih-outq7-cae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625209150249687"
    },
    {
        "index": 19209,
        "eventType": "claim",
        "item": "wfvur-lykor-uwiaa-aaaaa-byalt-eaqca-aaaao-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ohttb-23sx6-qhrbw-fqs5p-cmi4d-iyyha-wy4cm-5xgjt-r7ysn-cofci-oae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625209150249687"
    },
    {
        "index": 19208,
        "eventType": "claim",
        "item": "imeur-yikor-uwiaa-aaaaa-byalt-eaqca-aaabh-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "7o3mv-rdawr-f3v3u-ilqsp-yvemq-vngjr-gthsg-gect2-g2ges-v24qx-7ae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625208072880952"
    },
    {
        "index": 19207,
        "eventType": "claim",
        "item": "mqfqs-sykor-uwiaa-aaaaa-byalt-eaqca-aaaa7-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "am6vx-z7hky-aywze-i2hxf-7af5t-emecm-vrnvg-zzbkr-e3f5q-44b4q-dqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625207311332986"
    },
    {
        "index": 19206,
        "eventType": "claim",
        "item": "gqhhq-5ykor-uwiaa-aaaaa-byalt-eaqca-aaabh-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "5p6ig-u4q5t-2gpep-c7gcu-rh444-vj2k2-5fayq-polpu-uffwa-5tuc6-wqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625206375848856"
    },
    {
        "index": 19205,
        "eventType": "claim",
        "item": "47miz-dakor-uwiaa-aaaaa-byalt-eaqca-aaaau-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "cdgiv-3waqd-srnui-ou4ru-2uucr-7lyfw-ab7sb-54nyk-eqid4-2hlc2-oqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625205553646592"
    },
    {
        "index": 19204,
        "eventType": "claim",
        "item": "kg7kd-mikor-uwiaa-aaaaa-byalt-eaqca-aaaal-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "fxs2e-6moxe-chpgz-372ml-5vp5c-zddyr-2jyur-g4czx-da46f-25a6i-hqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625205553646592"
    },
    {
        "index": 19203,
        "eventType": "claim",
        "item": "zyauk-fakor-uwiaa-aaaaa-byalt-eaqca-aaabi-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "d3r2s-bg57d-wt2eh-vdkuc-hmtfb-h5l7d-35oei-auq6a-kosye-qcygj-aqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625205553646592"
    },
    {
        "index": 19202,
        "eventType": "claim",
        "item": "7jxzz-2akor-uwiaa-aaaaa-byalt-eaqca-aaaa4-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "rsz3a-azmoi-zz36c-ox7nz-j4yrq-fbs6e-ybapn-ns6am-b6ibz-w3om6-rae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625205553646592"
    },
    {
        "index": 19201,
        "eventType": "claim",
        "item": "xedhl-aqkor-uwiaa-aaaaa-byalt-eaqca-aaabi-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "yaehg-jryl2-55c7p-yeaz2-4qdxi-feev6-yiekc-n6sdm-cwgfn-h2zgg-eqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625205553646592"
    },
    {
        "index": 19200,
        "eventType": "claim",
        "item": "kbs5b-nykor-uwiaa-aaaaa-byalt-eaqca-aaabl-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "megbn-7zq2d-nzpsm-7yafi-xnosg-ry42k-ullvh-hlx4g-djlay-b2rjo-yqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625205553646592"
    },
    {
        "index": 19199,
        "eventType": "claim",
        "item": "y63qs-pykor-uwiaa-aaaaa-byalt-eaqca-aaabo-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "zpsqn-e2g6o-qa6tx-tprvu-mdcdt-ticik-l4zei-5hosd-s3lp2-wwf2m-xae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625205553646592"
    },
    {
        "index": 19198,
        "eventType": "claim",
        "item": "t7puk-lqkor-uwiaa-aaaaa-byalt-eaqca-aaabq-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "yl26x-5ti2i-vns7t-begth-a652r-2krax-g2kx7-nczhz-7ribn-btkyc-6ae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19197,
        "eventType": "claim",
        "item": "5dmhl-oakor-uwiaa-aaaaa-byalt-eaqca-aaabq-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "6exha-vz2gq-2qq2k-sgdab-5uakj-6ox4w-ejlvw-aaij2-geovt-ifu3a-cqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19196,
        "eventType": "claim",
        "item": "jk7qj-sqkor-uwiaa-aaaaa-byalt-eaqca-aaabb-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "aanff-cgq42-2upfp-g3kkz-cf6jd-mhriq-xltqv-zwo6y-y732z-3h2rz-2ae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19195,
        "eventType": "claim",
        "item": "4c2ur-fikor-uwiaa-aaaaa-byalt-eaqca-aaaaw-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "yrfpk-36tjn-g75d7-iaepi-dlpoo-grxxm-x62rs-pl3td-k3wck-e6ssl-kqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19194,
        "eventType": "claim",
        "item": "cmgdt-xikor-uwiaa-aaaaa-byalt-eaqca-aaaa7-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "md7bp-cn45i-ai5wr-jvrdm-hctig-4jbf2-kuzcj-hyjlf-sp2ro-3a7rp-jae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19193,
        "eventType": "claim",
        "item": "bhlo3-iakor-uwiaa-aaaaa-byalt-eaqca-aaaav-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "eu7a5-btanc-d5rmw-6v4zd-cgp3b-ejg46-vafes-fluyt-23tkw-idrjc-uae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19192,
        "eventType": "claim",
        "item": "iljdt-zykor-uwiaa-aaaaa-byalt-eaqca-aaaah-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "gzumh-ag6az-mletq-l2dts-stpef-qn6ic-jy2ie-73ghb-qfwjx-4jy6l-tae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19191,
        "eventType": "claim",
        "item": "vjvo3-vakor-uwiaa-aaaaa-byalt-eaqca-aaabe-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "gckvu-zzguw-gk4tk-t56mp-2evc2-oeuak-jzyc3-5qi4e-przv7-vfacq-dae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19190,
        "eventType": "claim",
        "item": "eahsi-oakor-uwiaa-aaaaa-byalt-eaqca-aaabj-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "etxij-6uy2z-qqnsx-amx6z-3fvy5-q3aht-qawyp-lpgq7-kp5re-idizw-2ae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19189,
        "eventType": "claim",
        "item": "uid5b-6ikor-uwiaa-aaaaa-byalt-eaqca-aaaac-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "nglyy-jf5ob-dorni-evobu-oggxq-5zk6v-ds6aq-3land-ykqtk-t6sv6-eae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19188,
        "eventType": "claim",
        "item": "l5sst-aykor-uwiaa-aaaaa-byalt-eaqca-aaaap-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "myzyq-rucmp-qffpx-qwud5-jrmt4-cqlwp-bfzxb-dft2r-oj5el-uqqvy-pqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19187,
        "eventType": "claim",
        "item": "irsiz-6akor-uwiaa-aaaaa-byalt-eaqca-aaabf-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "teg46-x764b-6kloc-juqir-u72kv-nt73r-2hw22-bs5nc-l7lwi-przhu-lqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19186,
        "eventType": "claim",
        "item": "5ebqj-pqkor-uwiaa-aaaaa-byalt-eaqca-aaaaq-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ym5om-b3uj3-a6r5o-yqlr2-3u4ls-ybdqz-bqs43-ve4ew-ktiej-lvaaf-zqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19185,
        "eventType": "claim",
        "item": "3vw52-qqkor-uwiaa-aaaaa-byalt-eaqca-aaabe-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "y6nu6-opvo2-gjtzu-aag6s-if4gb-pgyqb-u2ruk-rwkyz-omngb-xirlx-dqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19184,
        "eventType": "claim",
        "item": "2uaoa-3ykor-uwiaa-aaaaa-byalt-eaqca-aaaac-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "dvymo-jgtag-jzlgw-7krqc-d4qgf-t7tuu-mkz3l-ttadk-bkqzq-hshcy-pqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19183,
        "eventType": "claim",
        "item": "zc37a-cykor-uwiaa-aaaaa-byalt-eaqca-aaaak-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "6nppl-o5xsi-rosta-sfdbb-leuz6-mexd3-xubqe-jzpsq-s2rly-fnq64-xqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19182,
        "eventType": "claim",
        "item": "w7o73-makor-uwiaa-aaaaa-byalt-eaqca-aaabm-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "etays-am2p7-ohsid-cwna4-gnu6a-giuus-3r7ge-wzajf-iwqze-alvxr-yae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19181,
        "eventType": "claim",
        "item": "2o3fk-4akor-uwiaa-aaaaa-byalt-eaqca-aaaba-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "fg5or-pghrz-nqa3p-of4ye-x3kpd-icfvx-gikye-fvq2r-rdddy-xd75p-dqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19180,
        "eventType": "claim",
        "item": "s6zhq-aykor-uwiaa-aaaaa-byalt-eaqca-aaaaw-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "uwiml-l7rjq-3rlpm-rb5ta-udz4h-4tras-62ars-y6bvu-33hrd-ktqfs-iae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19179,
        "eventType": "claim",
        "item": "lhjzz-hakor-uwiaa-aaaaa-byalt-eaqca-aaabn-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "nskf3-4snmw-s4bun-j67se-7gfjr-mvjdc-rkrwl-23k4g-j5hau-qik5w-dae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19178,
        "eventType": "claim",
        "item": "tfu7a-mikor-uwiaa-aaaaa-byalt-eaqca-aaaas-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "442od-etysr-4eayv-vsdzo-kxecb-sdh6g-gll4c-bk6lv-p5r2j-owpev-fqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19177,
        "eventType": "claim",
        "item": "nliic-6ikor-uwiaa-aaaaa-byalt-eaqca-aaaa3-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "6vml4-r3j46-pdab5-vqzon-icfkv-gtkbb-6wbue-bmlyo-k2wog-3fmqd-iqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19176,
        "eventType": "claim",
        "item": "sdp3y-gqkor-uwiaa-aaaaa-byalt-eaqca-aaaau-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "3jiqd-k3hf2-vs24g-yuzad-sh3u6-7temd-4n6sm-3z7ck-nv2fm-uug35-jae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19175,
        "eventType": "claim",
        "item": "p3i52-nqkor-uwiaa-aaaaa-byalt-eaqca-aaaav-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ozdwx-et2fa-4aed2-m3bxt-mh7k4-h5sqm-s67xq-af6nk-xk5le-5p265-fae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19174,
        "eventType": "claim",
        "item": "z7ndi-eqkor-uwiaa-aaaaa-byalt-eaqca-aaaai-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "b5wed-jv3to-xdcqo-ff6vs-itbnv-bvvum-pxjrb-xqm2j-4lsrg-vi2c2-mqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625204506523707"
    },
    {
        "index": 19173,
        "eventType": "claim",
        "item": "laeo3-gqkor-uwiaa-aaaaa-byalt-eaqca-aaaan-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "hdtqu-chehy-fpdsr-fscxm-chpq2-nhbuw-vnudp-63pfe-c7i56-wrn2r-4qe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19172,
        "eventType": "claim",
        "item": "jnshl-takor-uwiaa-aaaaa-byalt-eaqca-aaaab-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "x4cjm-ysx3w-qexmj-5crcu-v2epb-6bbas-wb3so-xnhqp-3di3l-oypjg-fqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19171,
        "eventType": "claim",
        "item": "mntm2-uqkor-uwiaa-aaaaa-byalt-eaqca-aaaa5-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "orq4c-lv4vt-nkmca-qpxrq-izh2j-26n6q-6imy5-5bbr7-qxeny-xfaig-mqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19170,
        "eventType": "claim",
        "item": "l27fr-bikor-uwiaa-aaaaa-byalt-eaqca-aaabp-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "nibgi-5d5q7-twg4j-b3a2i-c3bay-vazix-4l6yx-64pif-62wdx-w3hwr-4ae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19169,
        "eventType": "claim",
        "item": "dxl3d-3ykor-uwiaa-aaaaa-byalt-eaqca-aaaa3-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "yzffw-tfykw-vyswj-uhc5u-6v5qh-pdpuo-77ivi-yje42-3i52g-n63qq-wae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19168,
        "eventType": "claim",
        "item": "uvvbj-yakor-uwiaa-aaaaa-byalt-eaqca-aaaaa-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "kocy2-n53er-sr5md-6qydn-wr2ql-7ywe2-rp3gf-yvhqa-qxdjk-qpcrl-5ae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19167,
        "eventType": "claim",
        "item": "iw773-7qkor-uwiaa-aaaaa-byalt-eaqca-aaaaf-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "2xbkw-rxqhz-y6ffy-qw7p4-ogjei-erxhm-aqfo6-7rrod-ddsq4-io4we-vqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19166,
        "eventType": "claim",
        "item": "ohisi-aqkor-uwiaa-aaaaa-byalt-eaqca-aaabr-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "urmqc-o6lh5-mc2p3-sssmk-abzs5-welq3-6lnrh-2vmyd-4ic4q-m3p37-cae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19165,
        "eventType": "claim",
        "item": "jxjmb-uykor-uwiaa-aaaaa-byalt-eaqca-aaabd-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "c25ye-ywzte-teaky-cd2n2-22ivq-z2f5g-k7tpq-c4guy-muaxp-xozjv-eqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19164,
        "eventType": "claim",
        "item": "hrruk-wqkor-uwiaa-aaaaa-byalt-eaqca-aaaab-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "er5x6-p5owr-dopnk-bjqyz-zcse3-c2bct-mb5ou-r6y4g-sz524-ivorr-mqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19163,
        "eventType": "claim",
        "item": "e24zc-jykor-uwiaa-aaaaa-byalt-eaqca-aaaal-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "h6237-wynss-olvho-v32xu-k5p7j-6bijx-4ba6a-zua5c-dd2tv-verfx-vae",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19162,
        "eventType": "claim",
        "item": "ricwq-zykor-uwiaa-aaaaa-byalt-eaqca-aaaa6-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "doysw-wfali-pk5uc-esydc-p66bc-kn7dp-2kjpr-i6ssr-brdeh-my4h7-bqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19161,
        "eventType": "claim",
        "item": "k4ebj-lqkor-uwiaa-aaaaa-byalt-eaqca-aaabj-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "mzhxw-lgqbs-qlo7d-uk5kf-q7qyw-hdowv-yuuls-lnhtn-oglbr-mbb2q-xqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19160,
        "eventType": "claim",
        "item": "3pnwq-xikor-uwiaa-aaaaa-byalt-eaqca-aaaag-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "tppuu-y53ju-jadru-bzqwb-o6rux-2bh6n-houhf-lilhp-vvd47-xdvg7-hqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625203663437807"
    },
    {
        "index": 19159,
        "eventType": "claim",
        "item": "xdoqj-bakor-uwiaa-aaaaa-byalt-eaqca-aaaai-a",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "ke5na-rlslp-26452-3fkjz-3yfh6-dovpu-d4oqo-ljpdr-vwwqz-moijc-vqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625202593512104"
    },
    {
        "index": 19158,
        "eventType": "claim",
        "item": "vudst-tikor-uwiaa-aaaaa-byalt-eaqca-aaabg-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "rria2-lfqh4-g4an3-6ufg5-pnrmv-7wfa6-jbbyt-qvw2t-azkpe-r5emy-eqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625202593512104"
    },
    {
        "index": 19157,
        "eventType": "claim",
        "item": "fbrbs-fikor-uwiaa-aaaaa-byalt-eaqca-aaaap-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "kckar-iy4wr-7wixx-iv4fx-hk4yn-njth3-k677v-5nyg6-pltkx-iphpq-5qe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625202593512104"
    },
    {
        "index": 19156,
        "eventType": "claim",
        "item": "5zxmb-jykor-uwiaa-aaaaa-byalt-eaqca-aaaas-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "mkufy-mtvge-xq3nq-eumxk-o7zmf-vzofo-htvzm-brj7o-gmqo2-xy6ba-oqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625202593512104"
    },
    {
        "index": 19155,
        "eventType": "claim",
        "item": "6s2bj-wqkor-uwiaa-aaaaa-byalt-eaqca-aaaay-q",
        "from": "v43fl-cyaaa-aaaah-abc7a-cai",
        "to": "qqgwg-v7jxq-myag5-45pjm-gpqvy-qnanm-enapz-xv4ng-lgqz4-cgwhq-kqe",
        "collection": "qca2u-aaaaa-aaaah-abomq-cai",
        "price": 0,
        "date": "1659625202593512104"
    }
]
let newAc = false;
let newJson = [];
for (let i = 0; i < activity.length; i++) {
    for (let j = i + 1; j < activity.length; j++) {
        if (
            (activity[i].eventType === 'claim') &&
            (
                activity[i].index == activity[j].index ||
                activity[i].item == activity[j].item ||
                activity[i].to == activity[j].to ||
                activity[i].date == activity[j].date
            )
        ) {
            newAc = true;
            newJson.push({
                index: activity[i].index,
                item: activity[i].item,
                to: activity[i].to,
                date: activity[i].date
            })
            break;
        }
        if (newAc = true) {
            break;
        };
    }
}


console.log(newJson);
console.log(newJson.length);
// console.log(activity.length);

