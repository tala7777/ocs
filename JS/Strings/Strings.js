let name="    Tala Shkokani    "

// 1. trim()
console.log(name.trim());

// 2. trimStart()
console.log(name.trimStart());

// 3. trimEnd()
console.log(name.trimEnd());

// 4. padStart()
console.log(name.padStart(20, "_")); 

// 5. padEnd()
console.log(name.padEnd(20, "_")); 

// 6. charAt()
console.log(name.charAt(2));

// 7. charCodeAt()
console.log(name.charCodeAt(2));

// 8. split()
console.log(name.split(" "));

// 9. length
console.log(name.length);

// 10. slice()
console.log(name.slice(0, 4));

// 11. substring()
console.log(name.substring(0, 4));

// 12. substr()
console.log(name.substr(0, 4));

// 13. replace()
console.log(name.replace("Tala", "TS"));

// 14. replaceAll()
console.log("aaaTalaaaa".replaceAll("a", "*"));

// 15. toUpperCase()
console.log(name.toUpperCase());

// 16. toLowerCase()
console.log(name.toLowerCase());

// 17. concat()
console.log(name.concat(" is learning JavaScript"));

// 18. indexOf()
console.log(name.indexOf("a"));

// 19. lastIndexOf()
console.log(name.lastIndexOf("a"));

// 20. search()
console.log(name.search("Sh"));

// 21. match()
console.log(name.match(/a/g));

// 22. matchAll()
console.log([...name.matchAll(/a/g)]);

// 23. includes()
console.log(name.includes("Tala"));

// 24. startsWith()
console.log(name.startsWith("Tala"));

// 25. endsWith()
console.log(name.endsWith("kani"));
