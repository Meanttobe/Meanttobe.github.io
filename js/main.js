
var all_contests,num,len;

$.get('json/test.json',function(contests){
    // contests = JSON.parse(contests);
    all_contests=contests;
    len = 0;
    for(var x in all_contests){
        len++ ;
    }
    num = rand();
    run(contests);
});

//$.get('https://raw.githubusercontent.com/Tuilot/TARS/main/json/test.json',function(contests){
//    contests = JSON.parse(contests);
////    console.log(contests);
//    all_contests=contests;
//    len = 0;
//    for(var x in all_contests){
//        len++ ;
//    }
//    num = rand();
//    run(contests);
//});

function rand(){
    var p = new Array(10);
    var myset = new Set();
    for(var i=0;i<10;++i){
        var x = parseInt(Math.random()*len);
        if(myset.has(x)){
            i--;
            continue;
        }else{
            p[i] = x;
            myset.add(x);
        }
    }
    return p;
}

function next_tousts(){
    num = rand();
    run(all_contests);
}


function run(arr){
    var tbody = '';
    var details = '';

    for(var x=0;x<10;++x){
        var i = num[x];
        // var toust = ""
        var city = ""
        if(arr[i].province == '香港' || arr[i].province == '澳门'){
            city += arr[i].province +'特别行政区';
        }
        else {
            if(arr[i].province =='上海'||arr[i].province == '北京' ||arr[i].province == '天津'||arr[i].province == '重庆'){
            }
            else city += arr[i].province+'省';
            city += arr[i].city+'市';
        }
        // toust = city + arr[i].name;

        var hash = 'a'+i+'b';
        details +=detail(arr[i],hash,city);

        tbody +='<tr>';
        tbody += '<td>'+(x+1)+'</td>';
        tbody += '<td>';
        tbody += city;
        tbody += '</td>';
        tbody += '<td>';

        tbody += '<li class="list-group-item" data-toggle="modal" data-target="#';
        tbody += hash +'">';
        tbody += arr[i].name+'</li></td>';
        tbody += '</tr>';
    }
    document.getElementById('main').innerHTML=tbody;
    document.getElementById('details').innerHTML=details;
}


function detail(contest,hash,city) {
    var div='';
    div+='<div class="modal fade" id="'+hash+'" tabindex="-1" role="dialog" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '                        <div class="modal-dialog modal-lg" role="document">' +
        '                            <div class="modal-content">' +
        '                                <div class="modal-header">' +
        '                                    <h4 class="modal-title" >'+    city+contest.name+
        '                                    </h4>' +
        '                                    <button type="button" class="close" data-dismiss="modal"' +
        '                                            aria-hidden="true">×' +
        '                                    </button>' +
        '                                </div>' ;
    div+='<div class="modal-body">';
    
    div+=   '<div class="row">'+
                '<div class = "col-md-4"> <h4> 景区简介:</h4></div>'+
                '<div class = "col-md-4 ml-auto">'+
                    '<a href = "https://ditu.amap.com/search?query=' + city+contest.name + '" target="_blank" >'+
                        '<div class="map">查看地图>></div></a>'+
                '</div>'+
            '</div>';
    // div+='<h4>景区简介：</h4>';
    div+='<p class ="tou-p" >'+contest.content+'</p>';
    div+= '                                </div>' +
        '                                  <div class = "modal-footer"></div>'+
        '                            </div>' + //<!-- /.modal-content -->
        '                        </div>' + //<!-- /.modal-dialog -->
        '                    </div>'; //<!-- /.modal -->
    // console.log(div);
    return div;
}