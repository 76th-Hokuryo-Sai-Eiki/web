from pprint import pprint


def removeCircle(num):
    res = ord(num) - ord("①")
    if res < 50: return res

    res = ord(num) - ord("㉑") + 20
    if res < 50: return res

    res = ord(num) - ord("㊱") + 35
    if res < 50: return res

    return -1


DATA = []

while True:
    NAME = input(">> ")

    if NAME == "-":
        break

    ORG = input()
    DESC = input()

    ID = removeCircle(NAME[0])
    NAME = NAME[1:]

    LOCATION = ORG[ORG.find("（") + 1:ORG.find("）")]
    ORG = ORG.replace(f"（{ LOCATION }）", "")[2:]

    OBJ = {
        "id": ID,
        "name": NAME,
        "org": ORG,
        "location": LOCATION,
        "description": DESC,
    }

    print("---")
    pprint(OBJ)
    print("---")

    reject = input("Reject?")

    # if accept in {"y", "n"}:
    #     break

    if reject:
        print("rejected")
    else:
        print("accepted")
        DATA.append(OBJ)

print(DATA)
