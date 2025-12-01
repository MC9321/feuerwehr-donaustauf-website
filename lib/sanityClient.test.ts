import { type SanityClient } from 'next-sanity';
import { createClient } from 'next-sanity';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('next-sanity', () => ({
  createClient: vi.fn(),
}));

describe('sanityClient', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.resetModules();
  });

  it('should create Sanity client with correct config', async () => {
    const mockProjectId = 'test-project-id';
    const mockDataset = 'production';

    process.env.SANITY_PROJECT_ID = mockProjectId;
    process.env.SANITY_DATASET = mockDataset;

    const mockClient = { fetch: vi.fn() } as unknown as SanityClient;
    vi.mocked(createClient).mockReturnValue(mockClient);

    await import('./sanityClient');

    expect(createClient).toHaveBeenCalledWith({
      projectId: mockProjectId,
      dataset: mockDataset,
      apiVersion: 'v2025-11-13',
      useCdn: false,
    });
  });

  it('should export dataset and projectId', async () => {
    process.env.SANITY_PROJECT_ID = 'test-id';
    process.env.SANITY_DATASET = 'test-dataset';

    const sanityModule = await import('./sanityClient');

    expect(sanityModule.projectId).toBe('test-id');
    expect(sanityModule.dataset).toBe('test-dataset');
  });
});
