var HIDDEN_CLASS_NAME = 'hidden'
var TARGET_CLASS_NAME = 'target'
var SOURCE_CLASS_NAME = 'source'

var targetIdToShow = 1

function main() {
	var targets = getElements(TARGET_CLASS_NAME)
	var sources = getElements(SOURCE_CLASS_NAME)
	sources.forEach(function (sourceNode) {
		var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
		sourceNode.addEventListener('click', function () {
			showTarget(targets, sourceNodeId)
		})
	})
	showTarget(targets, targetIdToShow)
}

function getElements(type) {
	return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
		var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
		var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
		return target1Num > target2Num
	})
}

function extractId(targetNode, baseClass) {
	var currentClassIndex = targetNode.classList.length
	while (currentClassIndex--) {
		var currentClass = targetNode.classList.item(currentClassIndex)
		var maybeIdNum = parseInt(currentClass.split('-')[1])
		if (isNaN(maybeIdNum)) {
			continue
		}
		var classStrinToValidate = baseClass + '-' + maybeIdNum
		if (classStrinToValidate === currentClass) {
			return maybeIdNum
		}
	}
}

function showTarget(targets, targetId) {
	targets.forEach(function (targetNode, targetIndex) {
		var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
		if (currentTargetNodeId === targetId) {
			targetNode.classList.remove(HIDDEN_CLASS_NAME)
		} else {
			targetNode.classList.add(HIDDEN_CLASS_NAME)
		}
	})
}

main()


const navbar = document.getElementsByClassName("fa-bars")[0];
const overlaymenu = document.querySelector(".overlay");
const closex = document.querySelector(".fa-xmark");

navbar.addEventListener("click", openOverlay);
closex.addEventListener("click", closeeOverlay);

function openOverlay() {
	overlaymenu.classList.add("active");

}

function closeeOverlay() {
	overlaymenu.classList.remove("active");

}


const booktable = document.getElementsByClassName("booktable")[0];
const submit = document.querySelector(".submit");
const close = document.querySelector(".closing");

booktable.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);

function openPopup() {
	submit.classList.add("reg-sub");

}

function closePopup() {
	submit.classList.remove("reg-sub");
}


function checkParams() {
	var name = $('#name').val();
	var tel = $('#tel').val();
	var date = $('#date').val();
	var time = $('#time').val();
	var textarea = $('#textarea').val();

	if (name.length != 0 && tel.length != 0 && date.length != 0 && time.length != 0 && textarea.length != 0) {
		$('#submit').removeAttr('disabled');
	} else {
		$('#submit').attr('disabled', 'disabled');
	}
}


AOS.init();



$("header nav a").on("click", function (e) {

	e.preventDefault();
	
	const href = $(this).attr("href");
	
	$("html, body").animate({ scrollTop: $(href).offset().top }, 1000);

})


