(function(root,definition){
	if(typeof define === 'function'){
		define(definition);
	}else if(typeof module !== 'undefined' && module.exports){
		module.exports = definition();
	}else{
		root[fefinition.fnName] = definition();
	}
})(this,function(){});