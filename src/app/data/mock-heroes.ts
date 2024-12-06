import { Hero } from "../types/hero";

export const HEROES: Hero[] = [
    {
        "id": '1',
        "name": "Spider-Man",
        "description": "A young hero with spider-like abilities, using his powers to protect New York City from villains.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b16a3cb4-1b0c-4102-b7cb-4dead410ebdc/dgcs5js-c6874a8a-3626-4148-8a5e-cd1118c365e6.png/v1/fill/w_894,h_894,q_70,strp/spiderman_by_corynmv_dgcs5js-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IxNmEzY2I0LTFiMGMtNDEwMi1iN2NiLTRkZWFkNDEwZWJkY1wvZGdjczVqcy1jNjg3NGE4YS0zNjI2LTQxNDgtOGE1ZS1jZDExMThjMzY1ZTYucG5nIiwiaGVpZ2h0IjoiPD05MDAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2IxNmEzY2I0LTFiMGMtNDEwMi1iN2NiLTRkZWFkNDEwZWJkY1wvY29yeW5tdi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.5OsL881QVxa0lvMBqmjgmsSAC2JUo56QiNtDquu8xII"
    },
    {
        "id": '2',
        "name": "Iron Man",
        "description": "A genius inventor who dons a powerful armored suit to fight evil and save the world.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19ZHueyBlyNcrBi07D6mQhm4Zd-icpGHlSw&s"
    },
    {
        "id": '3',
        "name": "Wonder Woman",
        "description": "An Amazonian warrior princess and demigoddess with extraordinary strength and combat skills.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXVi7bSYYVh1_2eAPopqxZFqPA9V6vySNJw&s"
    },
    {
        "id": '4',
        "name": "Batman",
        "description": "A dark knight and billionaire detective who fights crime using intelligence, martial arts, and technology.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7df41a9-7af9-4934-8c36-9149d8e65e17/dfzlkk8-4e1f35c6-81a0-4fa1-8185-9f6bb249de63.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3ZGY0MWE5LTdhZjktNDkzNC04YzM2LTkxNDlkOGU2NWUxN1wvZGZ6bGtrOC00ZTFmMzVjNi04MWEwLTRmYTEtODE4NS05ZjZiYjI0OWRlNjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gCU15CFttJusSolDXost0bM4E-M0hTIx7JcTZYFff_o"
    },
    {
        "id": '5',
        "name": "Captain America",
        "description": "A super-soldier from World War II who represents justice, freedom, and the American spirit.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4TnmXANlu5RAtVhGHX9Sg5U6IzyycdVAIQ&s"
    },
    {
        "id": '6',
        "name": "Superman",
        "description": "An alien from Krypton with superhuman abilities, dedicated to truth and justice on Earth.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7055ca6-f103-41f4-bc9e-3e9646a7562f/dg8l1nr-a103cf5e-8431-456d-8b93-669d7812283a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3MDU1Y2E2LWYxMDMtNDFmNC1iYzllLTNlOTY0NmE3NTYyZlwvZGc4bDFuci1hMTAzY2Y1ZS04NDMxLTQ1NmQtOGI5My02NjlkNzgxMjI4M2EuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vuBAkPLPAPRZmSUQOeqomt4lLvSKrxW6RHFeN5GuEt4"
    },
    {
        "id": '7',
        "name": "Black Widow",
        "description": "A master spy and elite martial artist who uses her skills to battle threats worldwide.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/126f98fe-942e-492a-8182-de18124ca383/dh43ze3-1af4ca0a-d16c-4fcf-ad08-03cb6a836c00.jpg/v1/fill/w_900,h_900,q_75,strp/black_widow_15_by_blacksnake1977_dh43ze3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyNmY5OGZlLTk0MmUtNDkyYS04MTgyLWRlMTgxMjRjYTM4M1wvZGg0M3plMy0xYWY0Y2EwYS1kMTZjLTRmY2YtYWQwOC0wM2NiNmE4MzZjMDAuanBnIiwiaGVpZ2h0IjoiPD05MDAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzEyNmY5OGZlLTk0MmUtNDkyYS04MTgyLWRlMTgxMjRjYTM4M1wvYmxhY2tzbmFrZTE5NzctNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.ehg9w7dn2NLHOhFRmgSJskHCreMZZQe4XCmmLTJaN08"
    },
    {
        "id": '8',
        "name": "Thor",
        "description": "The Norse god of thunder who wields the mighty hammer Mjölnir to protect Asgard and Earth.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8a63df7-3564-44f4-b052-b9668f29fa90/dg98jo6-9fb0f47b-e754-44ce-835c-24b683def25a.png/v1/fill/w_1280,h_1928,q_80,strp/thor_by_artfromdarkness_dg98jo6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4YTYzZGY3LTM1NjQtNDRmNC1iMDUyLWI5NjY4ZjI5ZmE5MFwvZGc5OGpvNi05ZmIwZjQ3Yi1lNzU0LTQ0Y2UtODM1Yy0yNGI2ODNkZWYyNWEucG5nIiwiaGVpZ2h0IjoiPD0xOTI4Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvZDhhNjNkZjctMzU2NC00NGY0LWIwNTItYjk2NjhmMjlmYTkwXC9hcnRmcm9tZGFya25lc3MtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.CHd0hog_LJqgVTqsnlnDPZogIahM-OiWK4g1xGX8r3U"
    },
    {
        "id": '9',
        "name": "Hulk",
        "description": "A scientist transformed into a green, indestructible giant when angered, using his power for good.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69b81377-6df1-4562-821d-f771093cc41e/dfuv6hb-a7a85562-8b4e-40cf-bc87-e4692027ddd4.jpg/v1/fill/w_1920,h_1920,q_75,strp/incredible_hulk_by_monsterdesignz80_dfuv6hb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5YjgxMzc3LTZkZjEtNDU2Mi04MjFkLWY3NzEwOTNjYzQxZVwvZGZ1djZoYi1hN2E4NTU2Mi04YjRlLTQwY2YtYmM4Ny1lNDY5MjAyN2RkZDQuanBnIiwiaGVpZ2h0IjoiPD0xOTIwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNjliODEzNzctNmRmMS00NTYyLTgyMWQtZjc3MTA5M2NjNDFlXC9tb25zdGVyZGVzaWduejgwLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.3Fs1Y2ZOR19spRcT8GedKjLyNfFI8WMBYIAVjiCFKBg"
    },
    {
        "id": '10',
        "name": "Black Panther",
        "description": "The king of Wakanda, a skilled fighter and tactician with enhanced abilities from the heart-shaped herb.",
        "image": "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png"
    },
    {
        "id": '11',
        "name": "Doctor Strange",
        "description": "A former surgeon who becomes the Sorcerer Supreme, defending Earth against mystical threats.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66111784-2c6b-4a04-9687-a1a5c82f48a1/df00fus-be0230e2-a3ee-4c80-9e5a-0daf804f4881.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2MTExNzg0LTJjNmItNGEwNC05Njg3LWExYTVjODJmNDhhMVwvZGYwMGZ1cy1iZTAyMzBlMi1hM2VlLTRjODAtOWU1YS0wZGFmODA0ZjQ4ODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rv-UxAIUDNw2PMMmrI4UmZ5SAZlrer-Yjn3P9ttfPy8"
    },
    {
        "id": '12',
        "name": "The Flash",
        "description": "A speedster hero with the ability to run at incredible speeds, traveling through time and dimensions.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/185acdf0-e197-48f6-9246-36e2803441cf/del9e8d-81e7ecaf-e4c1-473c-8536-f700487dbde1.jpg/v1/fill/w_1280,h_1280,q_75,strp/the_flash___profile_by_mrboscheinen_del9e8d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzE4NWFjZGYwLWUxOTctNDhmNi05MjQ2LTM2ZTI4MDM0NDFjZlwvZGVsOWU4ZC04MWU3ZWNhZi1lNGMxLTQ3M2MtODUzNi1mNzAwNDg3ZGJkZTEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nuqXHztkSOVGZz55iKOdyx0SCxkglIUDyAE_DdGdX9E"
    },
    {
        "id": '13',
        "name": "Aquaman",
        "description": "The king of Atlantis who protects the oceans and wields a powerful trident.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2964779f-9213-49e9-871d-b822caf67dfe/d7n99pu-3f4d5955-949d-4d72-a936-fabbcf2f0a77.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NjQ3NzlmLTkyMTMtNDllOS04NzFkLWI4MjJjYWY2N2RmZVwvZDduOTlwdS0zZjRkNTk1NS05NDlkLTRkNzItYTkzNi1mYWJiY2YyZjBhNzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Za_t6VUXI6aXitGwewAG7vSJmaTy-bFqB2S228F4FVY"
    },
    {
        "id": '14',
        "name": "Green Lantern",
        "description": "A member of an intergalactic police force that wields a ring capable of creating constructs from willpower.",
        "image": "https://upload.wikimedia.org/wikipedia/en/2/2d/Green_Lantern_Corps_%28circa_2011%29.png"
    },
    {
        "id": '15',
        "name": "Shazam",
        "description": "A young boy who transforms into a powerful superhero by saying the word 'Shazam.'",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZ3X-bU8ToLjOKU1QBbQ-iWn9GQcFd47hmg&s"
    },
    {
        "id": '16',
        "name": "Deadpool",
        "description": "A wisecracking mercenary with a regenerative healing factor and a penchant for breaking the fourth wall.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQLzJdwoCpkUfP6qQfsgSpnrwZba4cnA5iw&s"
    },
    {
        "id": '17',
        "name": "Wolverine",
        "description": "A mutant with retractable claws and a healing factor, known for his feral rage and combat skills.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ce25fe3-47a2-41f7-9fce-b9d7311f9597/dgeuw9h-a95a1ebd-39cb-45e4-b794-5244a9e058e6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBjZTI1ZmUzLTQ3YTItNDFmNy05ZmNlLWI5ZDczMTFmOTU5N1wvZGdldXc5aC1hOTVhMWViZC0zOWNiLTQ1ZTQtYjc5NC01MjQ0YTllMDU4ZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fYw93MK0USpayrwZuYl_g3Emzq9V1hGlBsE7xUMPNDY"
    },
    {
        "id": '18',
        "name": "Storm",
        "description": "A mutant with the ability to control the weather, often a leader of the X-Men.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02c29973-a7f5-4b69-8ed5-e4518f619565/dfgunoi-36f6e332-85c2-4a10-8c8d-06689b50f4a4.jpg/v1/fill/w_1280,h_1810,q_75,strp/x_men___ororo_munroe_a_k_a__storm_by_mi3dart_dfgunoi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMCIsInBhdGgiOiJcL2ZcLzAyYzI5OTczLWE3ZjUtNGI2OS04ZWQ1LWU0NTE4ZjYxOTU2NVwvZGZndW5vaS0zNmY2ZTMzMi04NWMyLTRhMTAtOGM4ZC0wNjY4OWI1MGY0YTQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UavoVMIMTfYdMxMIq-wnbJNNg3GFtKmc_98-mdqWlF4"
    },
    {
        "id": '19',
        "name": "Jean Grey",
        "description": "A powerful mutant with telepathic and telekinetic abilities, host to the Phoenix Force.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ee8bf-554e-4fd0-a36b-d5ffb5c0e021/di2fb2h-1855195c-15a9-4ad5-a938-97b3a20831f4.png/v1/fill/w_800,h_1067,q_80,strp/x_men_97_jean_grey_4_by_arrojado_di2fb2h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzU4NWVlOGJmLTU1NGUtNGZkMC1hMzZiLWQ1ZmZiNWMwZTAyMVwvZGkyZmIyaC0xODU1MTk1Yy0xNWE5LTRhZDUtYTkzOC05N2IzYTIwODMxZjQucG5nIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Piwj0hz-eaLIJgeSOLJoWXkyg1YtHO4A2oplYPKOoqk"
    },
    {
        "id": '20',
        "name": "Daredevil",
        "description": "A blind lawyer by day and a vigilante by night, using his heightened senses to fight crime.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/984a879b-e517-4213-88d0-dcc871727da7/dc809um-8a997e5f-37a7-49e8-83c5-96806a3f5e36.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk4NGE4NzliLWU1MTctNDIxMy04OGQwLWRjYzg3MTcyN2RhN1wvZGM4MDl1bS04YTk5N2U1Zi0zN2E3LTQ5ZTgtODNjNS05NjgwNmEzZjVlMzYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ku3_izPTyu6Ou7TsqdVv2LXDLTa4qOyjvFEATzmJWy0"
    },
    {
        "id": '21',
        "name": "Green Arrow",
        "description": "A skilled archer and vigilante who fights crime with precision and trick arrows.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e11d68a-50cd-4da7-b99f-0a6a7de5b665/d67dshd-06702a4d-5ecc-4853-bde3-f3340551a9c1.jpg/v1/fill/w_1600,h_951,q_75,strp/green_arrow_by_reffelia_d67dshd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTUxIiwicGF0aCI6IlwvZlwvMmUxMWQ2OGEtNTBjZC00ZGE3LWI5OWYtMGE2YTdkZTViNjY1XC9kNjdkc2hkLTA2NzAyYTRkLTVlY2MtNDg1My1iZGUzLWYzMzQwNTUxYTljMS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Yq9-GvmX1Awm-ZMsL0xcB4QYNV82Rxw0bt-Z_w2aUP8"
    },
    {
        "id": '22',
        "name": "Scarlet Witch",
        "description": "A mutant with reality-altering powers and a complex history with the Avengers and X-Men.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bee12814-24c2-4a90-825c-a86ea06663a8/d2x5i1f-dfe9d9c4-a436-4ef9-8932-4c145b6eb380.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JlZTEyODE0LTI0YzItNGE5MC04MjVjLWE4NmVhMDY2NjNhOFwvZDJ4NWkxZi1kZmU5ZDljNC1hNDM2LTRlZjktODkzMi00YzE0NWI2ZWIzODAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.W7RDrPaLxwcsmOl5NHg-C8AbGF2t8SLH5YYuEBf8TLc"
    },
    {
        "id": '23',
        "name": "Vision",
        "description": "An android with the ability to phase through objects, possessing immense intelligence and power.",
        "image": "https://live.staticflickr.com/4521/38482363832_99783097f5_b.jpg"
    },
    {
        "id": '24',
        "name": "Ant-Man",
        "description": "A hero who can shrink or grow in size while retaining his strength, often accompanied by ants.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/76/Ant_man%28Scott_Lang%29.jpg"
    },
    {
        "id": '25',
        "name": "Wasp",
        "description": "A heroine with the ability to shrink and fly, often a founding member of the Avengers.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7912ed44-6031-46e0-b18b-99de7daa5ada/db2l5ir-5b40cb01-0e31-4c00-9d5a-b97b65b63766.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5MTJlZDQ0LTYwMzEtNDZlMC1iMThiLTk5ZGU3ZGFhNWFkYVwvZGIybDVpci01YjQwY2IwMS0wZTMxLTRjMDAtOWQ1YS1iOTdiNjViNjM3NjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0t_47yyke7HSi7ipdE2Dq0cH2iEn7Qqb8xRjKToi0zw"
    },
    {
        "id": '26',
        "name": "Rogue",
        "description": "A mutant who absorbs powers and memories through touch, struggling with control over her abilities.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61e49a9e-e80c-42bd-bb23-af326784623a/dhpc4sd-6d677073-5918-4189-ac4b-43f96a9c7a83.jpg/v1/fill/w_1280,h_1280,q_75,strp/x_men_97_fan_art_02___rogue_by_billydallaspatton_dhpc4sd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxZTQ5YTllLWU4MGMtNDJiZC1iYjIzLWFmMzI2Nzg0NjIzYVwvZGhwYzRzZC02ZDY3NzA3My01OTE4LTQxODktYWM0Yi00M2Y5NmE5YzdhODMuanBnIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNjFlNDlhOWUtZTgwYy00MmJkLWJiMjMtYWYzMjY3ODQ2MjNhXC9iaWxseWRhbGxhc3BhdHRvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.5FOM218Yp4hS4tEbAyjHBniR-5DysOCEEPvNCU7J0EU"
    },
    {
        "id": '27',
        "name": "Beast",
        "description": "A brilliant scientist and mutant with enhanced strength, agility, and a blue-furred appearance.",
        "image": "https://live.staticflickr.com/65535/47765578832_37467071b5_b.jpg"
    },
    {
        "id": '28',
        "name": "Cyclops",
        "description": "A mutant leader of the X-Men who projects powerful optic blasts from his eyes.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb3a3fc1-2dbe-4dcb-979b-23d25916c6aa/dg5jv3a-4f9d9754-fcf5-4488-bec5-53e5438a5b49.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiM2EzZmMxLTJkYmUtNGRjYi05NzliLTIzZDI1OTE2YzZhYVwvZGc1anYzYS00ZjlkOTc1NC1mY2Y1LTQ0ODgtYmVjNS01M2U1NDM4YTViNDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OzcVTLMocl5IVA0p-GU77ukAUszIPgFkvaF2V1eTGdQ"
    },
    {
        "id": '29',
        "name": "Colossus",
        "description": "A mutant with the ability to transform his body into organic steel, granting immense strength.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2190a16f-cc36-47ca-be32-1ca110505d34/deom25c-646a153c-4e5e-410c-9855-89dcf2671c6a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxOTBhMTZmLWNjMzYtNDdjYS1iZTMyLTFjYTExMDUwNWQzNFwvZGVvbTI1Yy02NDZhMTUzYy00ZTVlLTQxMGMtOTg1NS04OWRjZjI2NzFjNmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-xG8JjvD0NfeZslR9496jkvWSOk1XgMdhFHe2ofVz90"
    },
    {
        "id": '30',
        "name": "Nightcrawler",
        "description": "A mutant with the ability to teleport and a demonic appearance but a kind heart.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/585ee8bf-554e-4fd0-a36b-d5ffb5c0e021/di2fbf7-5bfddf7a-c61d-4486-87a1-526b47160807.png/v1/fill/w_800,h_1067,q_80,strp/x_men_97_nightcrawler_by_arrojado_di2fbf7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzU4NWVlOGJmLTU1NGUtNGZkMC1hMzZiLWQ1ZmZiNWMwZTAyMVwvZGkyZmJmNy01YmZkZGY3YS1jNjFkLTQ0ODYtODdhMS01MjZiNDcxNjA4MDcucG5nIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DhIkFXsaEBNvuWlz-QpLXCLAm1y0-rli7ZcYxiQcJmo"
    },
    {
        "id": '31',
        "name": "Hawkeye",
        "description": "A master archer and member of the Avengers, known for his incredible accuracy and trick shots.",
        "image": "https://i.pinimg.com/564x/b8/cc/ab/b8ccab57f108952da342cbfffc81f174.jpg"
    },
    {
        "id": '32',
        "name": "Falcon",
        "description": "A hero equipped with high-tech wings, fighting alongside Captain America and the Avengers.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cdd3d1e-12ba-4d36-a6b1-ea9b0c845872/dda6q9p-f67320ba-fd4b-4bca-85e6-8c9f2cd0ced4.jpg/v1/fill/w_1024,h_1280,q_75,strp/falcon___avengers_by_charleslogan_dda6q9p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzJjZGQzZDFlLTEyYmEtNGQzNi1hNmIxLWVhOWIwYzg0NTg3MlwvZGRhNnE5cC1mNjczMjBiYS1mZDRiLTRiY2EtODVlNi04YzlmMmNkMGNlZDQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YP32Tw3vb7UwswC5Lz5eh8_iT2EVcPpZA3mvA8HvYsc"
    },
    {
        "id": '33',
        "name": "Silver Surfer",
        "description": "A cosmic hero who travels the universe on his surfboard, wielding the Power Cosmic.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f56b2f0b-bb28-4ff2-8253-47021ac4da2e/d1433ma-d89eab51-fddd-4b90-b1d6-e58a6ffea85b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1NmIyZjBiLWJiMjgtNGZmMi04MjUzLTQ3MDIxYWM0ZGEyZVwvZDE0MzNtYS1kODllYWI1MS1mZGRkLTRiOTAtYjFkNi1lNThhNmZmZWE4NWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6aJnCuCpX45QuAYf_-B2mAstsd_yjG2nW4FY8rrkfF0"
    },
    {
        "id": '34',
        "name": "Ghost Rider",
        "description": "A supernatural hero with a flaming skull who punishes evildoers as the Spirit of Vengeance.",
        "image": "https://i.pinimg.com/736x/20/4a/32/204a321fba3a94553e8195f30fd00820.jpg"
    },
    {
        "id": '35',
        "name": "Elektra",
        "description": "A skilled assassin and martial artist who walks the line between hero and antihero.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6169ae2-d0e8-47fc-95d6-cdcbd80bd3d3/dpys6o-59e7945f-939c-498a-a933-4d16b3345302.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2MTY5YWUyLWQwZTgtNDdmYy05NWQ2LWNkY2JkODBiZDNkM1wvZHB5czZvLTU5ZTc5NDVmLTkzOWMtNDk4YS1hOTMzLTRkMTZiMzM0NTMwMi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.W97vH8b1tO4neymdZ7QDvFRQt4i4uhVrFpa0VUPq5QY"
    },
    {
        "id": '36',
        "name": "Blade",
        "description": "A vampire hunter with enhanced abilities, protecting humanity from supernatural threats.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/655a01f2-ddad-4ad8-8b2c-04ffef2cb458/dhbs8j4-e39dd4d8-5147-4f4d-bec2-409c3f2a486b.jpg/v1/fill/w_400,h_400,q_75,strp/daywalker__blade_from_marvel_comics__by_caseycolton_dhbs8j4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1NWEwMWYyLWRkYWQtNGFkOC04YjJjLTA0ZmZlZjJjYjQ1OFwvZGhiczhqNC1lMzlkZDRkOC01MTQ3LTRmNGQtYmVjMi00MDljM2YyYTQ4NmIuanBnIiwiaGVpZ2h0IjoiPD00MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzY1NWEwMWYyLWRkYWQtNGFkOC04YjJjLTA0ZmZlZjJjYjQ1OFwvY2FzZXljb2x0b24tNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.nfXNs45oD5k4qY78XxH0nGXbKJTFwLexEWgwdSJ85Lc"
    },
    {
        "id": '37',
        "name": "Punisher",
        "description": "A vigilante with military training who uses lethal methods to combat crime.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/655a01f2-ddad-4ad8-8b2c-04ffef2cb458/dgb45e6-f36fcacb-0a56-4443-9b2c-f175ebb347a6.jpg/v1/fill/w_900,h_900,q_75,strp/the_punisher__by_caseycolton_dgb45e6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1NWEwMWYyLWRkYWQtNGFkOC04YjJjLTA0ZmZlZjJjYjQ1OFwvZGdiNDVlNi1mMzZmY2FjYi0wYTU2LTQ0NDMtOWIyYy1mMTc1ZWJiMzQ3YTYuanBnIiwiaGVpZ2h0IjoiPD05MDAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzY1NWEwMWYyLWRkYWQtNGFkOC04YjJjLTA0ZmZlZjJjYjQ1OFwvY2FzZXljb2x0b24tNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.xFjQm15YbrJkthzVjsqYWj_tG9gG7FRgu9rkmp_0LYo"
    },
    {
        "id": '38',
        "name": "Luke Cage",
        "description": "A hero with superhuman strength and unbreakable skin, defending his neighborhood as a hero for hire.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f5bc79f-6597-415e-9f3a-207ed2c5984d/ddz55ln-3460c580-e4d7-49e1-93da-37bb031397a9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNWJjNzlmLTY1OTctNDE1ZS05ZjNhLTIwN2VkMmM1OTg0ZFwvZGR6NTVsbi0zNDYwYzU4MC1lNGQ3LTQ5ZTEtOTNkYS0zN2JiMDMxMzk3YTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hqDEbUKcUAN4urVuf1RSUP4IGRn15bcUk6zpQG--X2Y"
    },
    {
        "id": '39',
        "name": "Jessica Jones",
        "description": "A former superhero turned private investigator, using her strength and wit to solve cases.",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56f0733f-b3e2-49d4-b989-3b0319a63130/d9jcegt-7321f44b-9782-4284-b502-7d2a21947c03.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2ZjA3MzNmLWIzZTItNDlkNC1iOTg5LTNiMDMxOWE2MzEzMFwvZDlqY2VndC03MzIxZjQ0Yi05NzgyLTQyODQtYjUwMi03ZDJhMjE5NDdjMDMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.k4ogR_tKpn8H6tPCGBIa3w2dJziKL9NmOL2cC9R5dQo"
    },
    {
        "id": '40',
        "name": "Star-Lord",
        "description": "The leader of the Guardians of the Galaxy, known for his charisma and knack for adventure.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Q2yG7IfpeEWb-8QE4mia4ePwgmfjKAS1BpYK4njIvamtCZH_wqq1uwa0Q61FlbNM_Qw&usqp=CAU"
    }
];
