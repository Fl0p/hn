import { PrismaClient, SubmissionStatus } from "../generated/prisma";

const prisma = new PrismaClient();

const mockCases = [
  {
    name: "Sprawa o zwrot nienależnie pobranego świadczenia",
    caseNumber: "ZUS/2024/001/KR",
    partyType: "Odwołanie",
    status: SubmissionStatus.COMPLETED,
  },
  {
    name: "Odwołanie od decyzji w sprawie emerytury",
    caseNumber: "ZUS/2024/002/WA",
    partyType: "Odwołanie",
    status: SubmissionStatus.PROCESSING,
  },
  {
    name: "Sprawa o ustalenie prawa do renty inwalidzkiej",
    caseNumber: "ZUS/2024/003/GD",
    partyType: "Wniosek",
    status: SubmissionStatus.PENDING,
  },
  {
    name: "Odwołanie od decyzji o odmowie przyznania zasiłku",
    caseNumber: "ZUS/2024/004/PO",
    partyType: "Odwołanie",
    status: SubmissionStatus.COMPLETED,
  },
  {
    name: "Sprawa o przeliczenie wysokości świadczenia",
    caseNumber: "ZUS/2024/005/KA",
    partyType: "Wniosek",
    status: SubmissionStatus.PROCESSING,
  },
  {
    name: "Odwołanie w sprawie zasiłku chorobowego",
    caseNumber: "ZUS/2024/006/LU",
    partyType: "Odwołanie",
    status: SubmissionStatus.INITIALIZED,
  },
  {
    name: "Sprawa o ustalenie kapitału początkowego",
    caseNumber: "ZUS/2024/007/WR",
    partyType: "Wniosek",
    status: SubmissionStatus.COMPLETED,
  },
  {
    name: "Odwołanie od decyzji o zawieszeniu emerytury",
    caseNumber: "ZUS/2024/008/SZ",
    partyType: "Odwołanie",
    status: SubmissionStatus.FAILED,
  },
  {
    name: "Sprawa o przyznanie renty rodzinnej",
    caseNumber: "ZUS/2024/009/BI",
    partyType: "Wniosek",
    status: SubmissionStatus.PROCESSING,
  },
  {
    name: "Odwołanie w sprawie składek na ubezpieczenie",
    caseNumber: "ZUS/2024/010/RZ",
    partyType: "Odwołanie",
    status: SubmissionStatus.PENDING,
  },
];

async function main() {
  console.log("Start seeding...");

  // Clear existing data
  await prisma.post.deleteMany({});
  console.log("Cleared existing data");

  // Create mock cases
  for (const caseData of mockCases) {
    const post = await prisma.post.create({
      data: caseData,
    });
    console.log(`Created case with id: ${post.id} - ${post.name}`);
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

