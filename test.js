function queryData (query){
	config = {
	  locateFile: filename => `/dist/${filename}`
	}
	// The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
	// We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.
	initSqlJs(config).then(function(SQL){
		const xhr = new XMLHttpRequest();
		// For example: https://github.com/lerocha/chinook-database/raw/master/ChinookDatabase/DataSources/Chinook_Sqlite.sqlite
		xhr.open('GET', 'jojo_lines.sqlite', true);
		xhr.responseType = 'arraybuffer';

		xhr.onload = e => {
		  const uInt8Array = new Uint8Array(xhr.response);
		  const db = new SQL.Database(uInt8Array);
		  const contents = db.exec(query);
		  parseData(contents);
		  // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
		};
		xhr.send();
		
	});
}

function getStoryArc(chapter) {
	if (chapter >= 848 && chapter <= 853) {
	  return("Soft & Wet")
	}
	else if (chapter >= 854 && chapter <= 857) {
	  return("California King Bed")
	}
	else if (chapter >= 858 && chapter <= 864) {
	  return("\"Paisley Park\" and \"Born This Way\"")
	}
}

function parseData (data){
	var outputTable = $('#example').DataTable();
	outputTable.clear().draw();
	//create table header
	result = data[0]["values"];
	
	let toAdd = [];
	for (line of result) {
		toAdd.push( [line[0], line[1] + " ("+line[2]+")", line[3] + " ("+line[4]+")", line[5], line[6], getStoryArc(line[4]) ] );
	}
	outputTable.rows.add(toAdd).draw();

	$('#container').css( 'display', 'block' );
	outputTable.columns.adjust().draw();

}

$(document).ready(function () {
    // Setup - add a text input to each footer cell
    $('#example tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });
 
    // DataTable
    var table = $('#example').DataTable({
        initComplete: function () {
            // Apply the search
            this.api()
                .columns()
                .every(function () {
                    var that = this;
 
                    $('input', this.footer()).on('keyup change clear', function () {
                        if (that.search() !== this.value) {
                            that.search(this.value).draw();
                        }
                    });
                });
        },
        "dom": '<lp<t>i>'
    });
});

function clickPress(event) {
    if (event.key == "Enter") {
    	queryData("SELECT * FROM dialogue WHERE " + document.getElementById("query").value);
    }
}

queryData("SELECT * FROM dialogue");
//console.log(a);