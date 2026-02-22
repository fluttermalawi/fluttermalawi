import { ClientResponseError } from 'pocketbase';
import {
  EventDTO,
  FAQItem,
  Initiative,
  Organiser,
  Project,
  ProjectDTO,
  Sponsor,
  Website,
} from '~/types';
import content from '~/lib/data/initiatives.json';
import { PocketBaseClient } from '~/lib/utils/pocketbase.client';

// Initialize client
// const pb =
// 	PocketBaseClient.getInstance().getClient();

// Get Sponsors
export async function getSponsors(): Promise<Sponsor[]> {
  try {
    const pb =
      PocketBaseClient.getInstance().getClient();
    const records = await pb
      .collection('sponsor')
      .getFullList<Sponsor>(100, {
        sort: '-created',
      });

    return records;
  } catch (error) {
    //TODO.error("Error fetching sponsors:", error); //TODO Analytics
    return [];
  }
}

// Get Events
export async function getEvents(): Promise<EventDTO[]> {
  try {
    const pb =
      PocketBaseClient.getInstance().getClient();
    // Fetch all events
    const records = await pb
      .collection('event')
      .getFullList<EventDTO>(200, {
        sort: '-startDate',
      });

    // // Get unique organiser IDs from all events
    // const organiserIds = new Set<string>();
    //
    // records.forEach(event => {
    //   if (Array.isArray(event.organisers)) {
    //     event.organisers.forEach((organiser: string) => organiserIds.add(organiser));
    //   } else if (event.organisers) {
    //     organiserIds.add(event.organisers);
    //   }
    // });
    //
    // // Fetch all unique organisers in one batch
    // const organisers = await getUsers([...organiserIds]);
    //
    //
    // //Create a map for quick organiser lookup
    // const organiserMap = new Map(organisers.map(org => [org.id, org]));
    //
    // // Add organiser details to each event
    // const enrichedRecords: {
    //   isCancelled: boolean;
    //   newStartDate: Date;
    //   city: string;
    //   endDate: Date;
    //   created: string;
    //   topics: EventTopic[];
    //   isPostponed: boolean;
    //   description: string;
    //   animationsEnabled?: boolean;
    //   eventType: EventType;
    //   collectionName: string;
    //   cover: string;
    //   organiser: Organiser[];
    //   newEndDate: Date;
    //   name: string;
    //   location: LocationType;
    //   id: string;
    //   region: string;
    //   collectionId: string;
    //   updated: string;
    //   startDate: Date
    // }[] = records.map(event => {
    //
    //
    //
    //   if (Array.isArray(event.organisers)) {
    //     // Handle multiple organisers
    //     event.organisers
    //         .map((organisers: string) => organiserMap.get(organisers))
    //         .filter((org: undefined): org is Organiser => org !== undefined);
    //   } else if (event.organisers) {
    //     // Handle single organiser
    //     enrichedEvent.organisers.map((organisers)=>{
    //       organiserMap.get(organisers);
    //     });
    //   }
    //
    //   return enrichedEvent;
    // });
    //

    return records;
  } catch (error) {
    //TODO.error("Error fetching events:", error);
    //TODO Handle Errors
    return [];
  }
}

export async function getUsers(ids: string[]): Promise<Organiser[]> {
  try {
    const pb =
      PocketBaseClient.getInstance().getClient();
    // Handle empty array case
    if (!ids.length) {
      return [];
    }

    // Create an array of promises for all user fetches
    const userPromises = ids.map(async (id) => {
      try {
        return await pb.collection('organiser').getOne<Organiser>(id);
      } catch (error) {
        // If individual request fails, log it but don't fail the entire operation
        if (error instanceof ClientResponseError) {
          //TODO.error(`Failed to fetch user ${id}:`, error.message);
        } else {
          //TODO.error(`Failed to fetch user ${id}:`, error);
        }
        return null;
      }
    });

    // Wait for all promises to resolve
    const results = await Promise.all(userPromises);

    // Filter out null results (failed requests) and return successful ones
    return results.filter(
      (result): result is Organiser => result !== null
    );
  } catch (error) {
    //TODO.error("Error in getUsers:", error);
    return [];
  }
}

// Get Projects
export async function getProjects(): Promise<Project[]> {
  try {
    const pb =
      PocketBaseClient.getInstance().getClient();
    const records = await pb
      .collection('project')
      .getFullList<Project>(200, {
        sort: '-created',
        filter: 'published = true',
      });
    return records;
  } catch (error) {
    // //TODO.error("Error fetching projects:", error); //TODO Analytics
    return [];
  }
}

// Get Website
export async function getWebsite(): Promise<Website[]> {
  try {
    const pb =
      PocketBaseClient.getInstance().getClient();
    const records = await pb
      .collection('website')
      .getFullList<Website>(200, {
        sort: '-created',
      });

    return records;
  } catch (error) {
    // //TODO.error("Error fetching projects:", error); //TODO Analytics
    return [];
  }
}

export async function getInitiatives(): Promise<Initiative[]> {
  try {
    return content.data as Initiative[];
  } catch (error) {
    // //TODO.error("Error fetching projects:", error); //TODO Analytics
    return [];
  }
}

// Get Sponsors
export async function getFaq(): Promise<FAQItem[]> {
  try {
    const pb =
      PocketBaseClient.getInstance().getClient();
    const records = await pb
      .collection('faq')
      .getFullList<FAQItem>(100, {
        sort: '-created',
      });
    //TODO.log(records);
    return records;
  } catch (error) {
    //TODO.error("Error fetching sponsors:", error); //TODO Analytics
    return [];
  }
}

//TODO Implement reCaptcha
export async function createProject(data: ProjectDTO): Promise<void> {
  try {
    const pb =
      PocketBaseClient.getInstance().getClient();
    const records = await pb.collection('project').create(data);

    //TODO.log("your records: ", records);
  } catch (error) {
    // //TODO.error("Error fetching projects:", error); //TODO Analytics
    throw Error();
  }
}
