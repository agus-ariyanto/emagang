define([], function(){
    alt.factory('Helper', function(){
        var api={};

        var tbl = function(nilai) {
            var angka = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
            var x = parseInt(nilai);
            if (x < 12 && !isNaN(x)) return " " + angka[x];
            if (x < 20 && !isNaN(x)) return tbl(x - 10) + " Belas";
            if (x < 100) return tbl(x / 10) + " Puluh" + tbl(x % 10);
            if (x < 200) return " Seratus" + tbl(x - 100);
            if (x < 1000) return tbl(x / 100) + " Ratus" + tbl(x % 100);
            if (x < 2000) return " Seribu" + tbl(x - 1000);
            if (x < 1000000) return tbl(x / 1000) + " Ribu" + tbl(x % 1000);
            if (x < 1000000000) return tbl(x / 1000000) + " Juta" + tbl(x % 1000000);
            return tbl(x / 1000000000) + " Milyar" + tbl(x % 1000000000);
        }

        api.getBulan=function(){
           return [
            {val:"01", name:"Januari"},
            {val:"02", name:"Februari"},
            {val:"03", name:"Maret"},
            {val:"04", name:"April"},
            {val:"05", name:"Mei"},
            {val:"06", name:"Juni"},
            {val:"07", name:"Juli"},
            {val:"08", name:"Agustus"},
            {val:"09", name:"September"},
            {val:"10", name:"Oktober"},
            {val:"11", name:"November"},
            {val:"12", name:"Desember"}
          ];
        }


        api.getIntBulan=function(v){
            if(v.length<3) return '01';
            v=v.trim().substr(0,3).toLowerCase();
            if(v=='jan') return '01';
            if(v=='feb') return '02';
            if(v=='mar') return '03';
            if(v=='apr') return '04';
            if(v=='mei') return '05';
            if(v=='jun') return '06';
            if(v=='jul') return '07';
            if(v=='agu') return '08';
            if(v=='sep') return '09';
            if(v=='okt') return '10';
            if(v=='nov') return '11';
            return '12';
        }

        api.dow=function(val){
            // basis iso 8601,
            // 1 : Senin - 7 : Minggu
            var h=['-','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu','Minggu'];
            return h[val];
        }

        api.extractFileName=function(fullpath){
          return fullpath.replace(/^.*[\\\/]/, '');
        }
        api.toNumber=function(nilai){
          if (nilai==''||nilai==undefined) return 0;
          var v=nilai.toString().replace(/[^0-9]/g,'');
          return parseInt(v);
        }

        api.toCurrency=function(val){
          //if(val==''||val==undefined||val==0||val=='0') return '0';
          val=val||'';
          var v=val.toString().replace(/[^0-9]/g,'');
          return v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        }
        api.toPhone=function(val){
          val=val||' ';
          return val.replace(/[^0-9]/g,'').replace(/(\d\d\d\d)(?=(\d))/g, "$1\-");
        }
        api.toPhoneAlias=function(val,fix){
            //return val.replace(/(?<!\()\d(?!\d?$)/g,'x');

            //depan belakang default patern 08xx-xxxx-xx12
            if(!val) return '';
            fix=fix||2;
            var a=val.split('');
            var b=a.splice(0,fix);
            var c=a.splice((a.length-fix),fix);
            return b.join('')+a.join('').replace(/\d/g,'x')+c.join('');
        }
        api.terbilang=function(val){
          var v=tbl(val);
          return v;
        }

        /* dimensi object pdf */
        api.getHeight=function(width_in_percent){
          var w,h,o={};
          w=document.getElementById('pdf-object-wrapper').clientWidth;
          w = w * width_in_percent / 100;
          h = 4*w/3;
          o.width=parseInt(w);
          o.height=parseInt(h);
          return o;
        }

        /* export table ke excel
         * parameter table = id table
         * style jangan menggunakan css
         * lebih baik pake hidden div sebagai wrapper-nya
         * misal
         * <div style="display:none">
         *    <table id="table-excel">..</table>
         * </div>
         * <button type="button" ng-click="ConvertExcel('table-excel','test')">Convert</button>
         * dalam controller.js
         * $scope.ConvertExcel=function(table,name){
         *    Helper.exportToExcel(table,name);
         * }
         */
        api.exportToExcel=function(table,name){
          var t=document.getElementById(table);
          var base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) };
          var format = function (s) { return s.replace(/{(\w+)}/g,"")};
          var  uri = 'data:application/vnd.ms-excel;base64,',
          template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" '+
                     'xmlns:x="urn:schemas-microsoft-com:office:excel" '+
                     'xmlns="http://www.w3.org/TR/REC-html40" lang="en">'+
                     '<head><meta charset="utf-8"> <meta http-equiv="content-language" content="en"> '+
                     '<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'+
                     '<x:Name>'+name+'</x:Name>'+
                     '<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>'+
                     '</x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook>'+
                     '</xml><![endif]--></head><body>'+
                     '<table>'+t.innerHTML+'</table></body></html>';
          /*
          pake method ini bisa
             window.location.href=uri + base64(format(template));

          tapi lebih smooth pake bawah ini,
          nama file bisa diganti dengan easy human readingfile
            - buat element anchor dengan attribut href dan download
            - diklik
            - element dihapus..
          */

          var ref = uri + base64(format(template));
          var a = document.createElement('A'),
              b = document.createAttribute('href'),
              c = document.createAttribute('download');

          b.value=ref;
          c.value=name+'.xls';
          a.setAttributeNode(b);
          a.setAttributeNode(c);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }

        api.createPdfObject=function(pdf_file,div_id,percent_width){
            var d = api.getHeight(percent_width);
            var ob= '<object class="hide-on-print" type="application/pdf" data="'
                    +pdf_file+
                    '" width="'+d.width+'" height="'+d.height+
                    '">browser tidak mendukung obyek embed, <br>Silahkan unduh Chrome atau Firefox terbaru</object>';
            document.getElementById(div_id).innerHTML=ob;
            return ob;
        }
        // required datejs
        api.toFormat=function(dbdate,to_format){
            var tf=to_format||'dd MMM yyyy';
            var d=dbdate.replace(' ','T');
            var t=Date.parse(d).toString(tf);
            //console.log(t);
            return t;
        }



        return api;
    });
});
