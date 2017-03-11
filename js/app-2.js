//-----------------------------------------------------------
//TASK : 
//   PART 1 -- Convert array of objects from `sample-data.js` 
//             to HTML table rows (see index.html for example structure)
//            
//   PART 2 -- (ADVENTURE MODE!)
//             Add an event listener to each remove icon button 
//             that will remove the record from the data set and 
//             render the new smaller data set back to the u.i.
//-----------------------------------------------------------

function dataSetToHtmlRows(dataSet){
	var tableBodyEl = document.querySelector('.table_user-accounts tbody')

	var bigHtmlStrOfRows = ''

	forEach(dataSet, function(userRecordObj, index, theArray){
		console.log(userRecordObj)
		var htmlRow =  '<tr>'
		htmlRow     +=     '<td> <img src="'+ userRecordObj.picture.thumbnail +'"> </td>' 
		htmlRow     +=     '<td>' + userRecordObj.name.first +  '</td>'//first
		htmlRow     +=     '<td>' + userRecordObj.name.last + '</td>'    //last
		htmlRow     +=     '<td>'  + userRecordObj.location.city + '</td>'  // city
		htmlRow     +=     '<td>'  + userRecordObj.location.state + '</td>'// state 
		htmlRow     +=     '<td>' + userRecordObj.email + '</td>'  // email
		htmlRow     +=     '<td class="remove">'
		htmlRow     += 		'<i class="fa fa-trash fa-3x" aria-hidden="true" data-useremail="'+ userRecordObj.email  +'"></i>'
		htmlRow     +=		'</td>'
		htmlRow     += '</tr>' 
		
	   bigHtmlStrOfRows += htmlRow
	})

	tableBodyEl.innerHTML = bigHtmlStrOfRows
	
	var removeIconEls = document.querySelectorAll('tbody tr .fa-trash')
	console.log(removeIconEls)
	
   var filteredDataSet = []

	forEach(removeIconEls, function(removeIconEl){
		removeIconEl.addEventListener('click', function(evt){
			var clickedIconEl = evt.target
			var clickedUserEmail = clickedIconEl.dataset.useremail
			console.log(clickedUserEmail)

			forEach(dataSet, function(userObj, i){
				if(userObj.email !== clickedUserEmail){
					filteredDataSet.push(userObj)
				}
			})
			dataSet = filteredDataSet
			dataSetToHtmlRows(filteredDataSet)
		})
	})
	

}
	
var userAccountsList = dataSetToHtmlRows(userAccountsList)



