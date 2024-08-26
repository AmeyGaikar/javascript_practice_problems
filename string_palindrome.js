function palindrome(str) {

    const orgSen = str;
    let revOrgSen = ""

for(i=orgSen.length-1 ; i>=0 ; i--) {
    revOrgSen += str[i];
}

if (revOrgSen === orgSen) {
    return true;
} else {
    return false;
}

}

console.log(palindrome("racecars"))